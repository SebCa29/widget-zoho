{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 ZOHO.embeddedApp.on("PageLoad", function(data) \{\
\
    console.log("DATA :", data);\
\
    let recordId = null;\
\
    if(data && data.EntityId && data.EntityId.length > 0)\
    \{\
        recordId = data.EntityId[0];\
    \}\
\
    let html = "";\
\
    html += "<b>Widget OK</b><br><br>";\
\
    if(recordId != null)\
    \{\
        html += "Session ID : " + recordId;\
    \}\
    else\
    \{\
        html += "Impossible de r\'e9cup\'e9rer l'ID de la session";\
    \}\
\
    document.getElementById("content").innerHTML = html;\
\
\});\
\
ZOHO.embeddedApp.init();}