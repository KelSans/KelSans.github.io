gdjs.Title_32CardCode = {};
gdjs.Title_32CardCode.localVariables = [];
gdjs.Title_32CardCode.GDNewTextObjects1= [];
gdjs.Title_32CardCode.GDNewTextObjects2= [];
gdjs.Title_32CardCode.GDPlayObjects1= [];
gdjs.Title_32CardCode.GDPlayObjects2= [];
gdjs.Title_32CardCode.GDQuitObjects1= [];
gdjs.Title_32CardCode.GDQuitObjects2= [];
gdjs.Title_32CardCode.GDplaybuttonObjects1= [];
gdjs.Title_32CardCode.GDplaybuttonObjects2= [];
gdjs.Title_32CardCode.GDhighlightObjects1= [];
gdjs.Title_32CardCode.GDhighlightObjects2= [];
gdjs.Title_32CardCode.GDPlayerHealthBarObjects1= [];
gdjs.Title_32CardCode.GDPlayerHealthBarObjects2= [];
gdjs.Title_32CardCode.GDPlayerObjects1= [];
gdjs.Title_32CardCode.GDPlayerObjects2= [];


gdjs.Title_32CardCode.mapOfGDgdjs_9546Title_959532CardCode_9546GDplaybuttonObjects1Objects = Hashtable.newFrom({"playbutton": gdjs.Title_32CardCode.GDplaybuttonObjects1});
gdjs.Title_32CardCode.mapOfGDgdjs_9546Title_959532CardCode_9546GDplaybuttonObjects1Objects = Hashtable.newFrom({"playbutton": gdjs.Title_32CardCode.GDplaybuttonObjects1});
gdjs.Title_32CardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Intro Scene: tutorial");
}}

}


};gdjs.Title_32CardCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("playbutton"), gdjs.Title_32CardCode.GDplaybuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32CardCode.mapOfGDgdjs_9546Title_959532CardCode_9546GDplaybuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.Title_32CardCode.GDhighlightObjects1);
/* Reuse gdjs.Title_32CardCode.GDplaybuttonObjects1 */
{for(var i = 0, len = gdjs.Title_32CardCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.Title_32CardCode.GDhighlightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32CardCode.GDplaybuttonObjects1.length ;i < len;++i) {
    gdjs.Title_32CardCode.GDplaybuttonObjects1[i].setColor("245;166;35");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playbutton"), gdjs.Title_32CardCode.GDplaybuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32CardCode.mapOfGDgdjs_9546Title_959532CardCode_9546GDplaybuttonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.Title_32CardCode.GDhighlightObjects1);
/* Reuse gdjs.Title_32CardCode.GDplaybuttonObjects1 */
{for(var i = 0, len = gdjs.Title_32CardCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.Title_32CardCode.GDhighlightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32CardCode.GDplaybuttonObjects1.length ;i < len;++i) {
    gdjs.Title_32CardCode.GDplaybuttonObjects1[i].setColor("248;231;28");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playbutton"), gdjs.Title_32CardCode.GDplaybuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32CardCode.GDplaybuttonObjects1.length;i<l;++i) {
    if ( gdjs.Title_32CardCode.GDplaybuttonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32CardCode.GDplaybuttonObjects1[k] = gdjs.Title_32CardCode.GDplaybuttonObjects1[i];
        ++k;
    }
}
gdjs.Title_32CardCode.GDplaybuttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32CardCode.GDplaybuttonObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "308f50057e3ab8cf188991c0f789c61641675f0cde46a94c0343d30e2db99f00_Reload.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Title_32CardCode.GDplaybuttonObjects1.length ;i < len;++i) {
    gdjs.Title_32CardCode.GDplaybuttonObjects1[i].setColor("208;2;27");
}
}
{ //Subevents
gdjs.Title_32CardCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Title_32CardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32CardCode.GDNewTextObjects1.length = 0;
gdjs.Title_32CardCode.GDNewTextObjects2.length = 0;
gdjs.Title_32CardCode.GDPlayObjects1.length = 0;
gdjs.Title_32CardCode.GDPlayObjects2.length = 0;
gdjs.Title_32CardCode.GDQuitObjects1.length = 0;
gdjs.Title_32CardCode.GDQuitObjects2.length = 0;
gdjs.Title_32CardCode.GDplaybuttonObjects1.length = 0;
gdjs.Title_32CardCode.GDplaybuttonObjects2.length = 0;
gdjs.Title_32CardCode.GDhighlightObjects1.length = 0;
gdjs.Title_32CardCode.GDhighlightObjects2.length = 0;
gdjs.Title_32CardCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.Title_32CardCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.Title_32CardCode.GDPlayerObjects1.length = 0;
gdjs.Title_32CardCode.GDPlayerObjects2.length = 0;

gdjs.Title_32CardCode.eventsList1(runtimeScene);

return;

}

gdjs['Title_32CardCode'] = gdjs.Title_32CardCode;
