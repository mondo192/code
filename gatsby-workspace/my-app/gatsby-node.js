const path = require("path")
const data = require("./data")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  console.log(data);

  data.forEach(page => {
    createPage({
      path: page.slug,
      component: path.resolve(__dirname, "src/templates/Generic.tsx"),
      context: {
        title: page.title,
        description: page.description
      }
    })
  });
}