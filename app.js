import express from "express";
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //to use the login function

import path from "path";
import templateEngine from "./util/templateEngine.js";



app.get("/", (req, res) => {
      res.sendFile(path.resolve("public/pages/login.html"));
});

app.get("/success", (req, res) => {
    res.sendFile(path.resolve("public/pages/success.html"));
}); 

app.get("/error", (req, res) => {
    res.sendFile(path.resolve("public/pages/error.html"));    
});

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
      tabTitle: "Frontpage | Welcome"
});

app.get("/frontpage", (req, res) => {
  res.send(frontpagePage);
});

const javascript = templateEngine.readPage("./public/pages/javascriptDocumentation/javascript.html");
const javascriptPage = templateEngine.renderPage(javascript, { 
      tabTitle: "Javascript Documentation",
      
}); 

app.get("/javascript", (req, res) => {
  res.send(javascriptPage);
});

const nodeInGeneral = templateEngine.readPage("./public/pages/nodeDocumentation/node_doc.html");
const nodeInGeneralPage = templateEngine.renderPage(nodeInGeneral, { 
      tabTitle: "Node.js Documentation",
      
}); 

app.get("/node", (req, res) => {
  res.send(nodeInGeneralPage);
});

const tools = templateEngine.readPage("./public/pages/tools/tools.html");
const toolsPage = templateEngine.renderPage(tools, { 
      tabTitle: "Other Tools",
      
}); 

app.get("/tools", (req, res) => {
  res.send(toolsPage);
});

const webAPI = templateEngine.readPage("./public/pages/webapi/webapi.html");
const webAPIPage = templateEngine.renderPage(webAPI, { 
      tabTitle: "web API",
      
}); 

app.get("/webAPI", (req, res) => {
  res.send(webAPIPage);
});

const rendering = templateEngine.readPage("./public/pages/Rendering/rendering.html");
const renderingPage = templateEngine.renderPage(rendering, { 
      tabTitle: "Rendering",
      
}); 

app.get("/rendering", (req, res) => {
  res.send(renderingPage);
});

app.get("/signup", (req, res) => {
  res.send(frontpagePage);
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'mathias' && password === 'password123') {

    res.redirect('/success');
    
  } else {

    res.redirect('/error');
  }
});






const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port " + PORT);
})