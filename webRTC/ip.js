function getIPs(callback) {
  var ip_dups = {};

  var RTCPeerConnection = window.RTCPeerConnection
    || window.mozRTCPeerConnection
    || window.webkitRTCPeerConnection;

  //bypass naive webrtc blocking using an iframe
  if (!RTCPeerConnection) {
    var win = iframe.contentWindow;
    RTCPeerConnection = win.RTCPeerConnection
      || win.mozRTCPeerConnection
      || win.webkitRTCPeerConnection;
  }

  //minimal requirements for data connection
  var mediaConstraints = {
    optional: [{ RtpDataChannels: true }]
  };

  var servers = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

  //construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);

  function handleCandidate(candidate) {
    //match just the IP address
    var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
    var ip_addr = ip_regex.exec(candidate)[1];

    //remove duplicates
    if (ip_dups[ip_addr] === undefined)
      callback(ip_addr);

    ip_dups[ip_addr] = true;
  }

  pc.onicecandidate = function (ice) {
    if (ice.candidate)
      handleCandidate(ice.candidate.candidate);
  };

  pc.createDataChannel("");

  pc.createOffer(function (result) {
    pc.setLocalDescription(result, function () { }, function () { });
  }, function () { });

  //wait for a while to let everything done
  setTimeout(function () {
    //read candidate info from local description
    var lines = pc.localDescription.sdp.split('\n');

    lines.forEach(function (line) {
      if (line.indexOf('a=candidate:') === 0)
        handleCandidate(line);
    });
  }, 1000);
}

// Get IP
getIPs(function (ip) {
  if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
    console.log('Private ip :' + ip)
  } else {
    console.log('Public ip :' + ip)
  }
});