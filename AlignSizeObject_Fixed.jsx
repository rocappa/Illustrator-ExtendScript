pt=25.4/72
var dia = new Window("dialog", "オブジェクトの大きさを揃える", [0,0,250,180]);
    dia.pane1 = dia.add("panel",[5,25,240,65],"サイズの基準");
    dia.radi1 = dia.pane1.add("radiobutton",[10,5,60,20],"タテ", );
    dia.radi2 = dia.pane1.add("radiobutton",[70,5,120,20],"ヨコ");
    dia.pane2 = dia.add("panel",[5,75,240,125],"サイズは");
    dia.tex1 = dia.pane2.add("edittext",[10,10,100,30]);
    dia.add("statictext",[110,100,240,120],"mm");
    dia.bot1 = dia.add("button",[10,140,100,170],"実行", { name:"ok"});
    dia.radi1.value=true;
    dia.center();
    dia.show();
     
sel = activeDocument.selection;
for (i=0; i<sel.length; i++)
{
    if(dia.radi1.value){
        kijyun=sel[i].height;
    }else{
        kijyun=sel[i].width;
    }
    bairitu=dia.tex1.text/(kijyun*pt)*100;
    sel[i].resize(bairitu, bairitu,true,true,true,true,bairitu,Transformation.CENTER);
}