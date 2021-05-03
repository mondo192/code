import { useEffect } from 'react';
import './App.css';

var ip_dups = {};

export default function App() {

  const getIpAddr = () => {
    console.log("start");
    
    const pc = new RTCPeerConnection({iceServers: [{urls: "stun:stun.services.mozilla.com"}]});
    const dc = pc.createDataChannel("channel");
    dc.onmessage = (e: MessageEvent<any>) => {
      console.log("Just got a message " + e.data);
    }
    dc.onopen = (e: Event) => {
      console.log("Connection opened");
    }
    pc.onicecandidate = (e: RTCPeerConnectionIceEvent) => {
      const ip = handleCandiate(JSON.stringify(pc.localDescription));
    }

    pc.createOffer().then(o => pc.setLocalDescription(o)).then(a => console.log("set"));
  }

  const handleCandiate = (candidate: string) => {
    const ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
    const ip_addr = ip_regex.exec(candidate);
    console.log(ip_addr);
  }

  useEffect(() => {
    getIpAddr();
  }, []);

  return (
    <div>
    </div>  
  );
}
