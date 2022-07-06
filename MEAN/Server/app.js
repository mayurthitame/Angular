express=require('express');

eobj=express();

port=5100;

function MarvellousConnect(request,response)
{
  console.log("Marvellous server is live at port 5100");
}

eobj.listen(port,MarvellousConnect);

function MarvellousRoot(request,response)
{
  response.json({"status":"Success"});
}

eobj.get('/',MarvellousRoot);

function MarvellousBatches(request,response)
{
  response.json({"PPA":"4 Months","Python":"3 months","Angular":"5 months"});
}

eobj.get('/getBatches',MarvellousBatches);

function MarvellousAdmin(request,response)
{
  response.json({"Mobile":"702013938","Website":"www.marvellousinfosystems.com"});
}

eobj.get('/getAdminDetails',MarvellousAdmin);