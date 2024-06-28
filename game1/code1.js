gdjs.Intro_32Scene_58_32tutorialCode = {};
gdjs.Intro_32Scene_58_32tutorialCode.localVariables = [];
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects4= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects1= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects2= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects3= [];
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects4= [];


gdjs.Intro_32Scene_58_32tutorialCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3);
{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3[i].hide(false);
}
}}

}


};gdjs.Intro_32Scene_58_32tutorialCode.asyncCallback33265196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_32Scene_58_32tutorialCode.localVariables);
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Intro_32Scene_58_32tutorialCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_32Scene_58_32tutorialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro_32Scene_58_32tutorialCode.asyncCallback33265196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_32Scene_58_32tutorialCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Dialogue");
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Intro_32Scene_58_32tutorialCode.asyncCallback33264228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_32Scene_58_32tutorialCode.localVariables);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "629198__audacitier__phone-ringing-3.mp3", 1, false, 15, 1);
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Intro_32Scene_58_32tutorialCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_32Scene_58_32tutorialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.Intro_32Scene_58_32tutorialCode.asyncCallback33264228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_32Scene_58_32tutorialCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ScrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScrollText");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.01);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.03);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.hasClippedScrollingCompleted());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "testblahblah.wav", 0, false, 70, gdjs.randomWithStep(-(1), -(1.5), -(0.1)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Speak") >= 0.2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Speak");
}}

}


};gdjs.Intro_32Scene_58_32tutorialCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{



}


};gdjs.Intro_32Scene_58_32tutorialCode.asyncCallback33276620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_32Scene_58_32tutorialCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects3);
gdjs.copyArray(runtimeScene.getObjects("darkness"), gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects3);
{gdjs.dialogueTree.stopRunningDialogue();
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects3.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects3[i].setX(gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects3[i].getX() + (15));
}
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects3.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects3[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Floor 1:  Whose got Cheese?", false);
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Intro_32Scene_58_32tutorialCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_32Scene_58_32tutorialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_32Scene_58_32tutorialCode.asyncCallback33276620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_32Scene_58_32tutorialCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33275148);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33275860);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1 */
{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("-> "));
}
}}

}


};gdjs.Intro_32Scene_58_32tutorialCode.eventsList8 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fence"), gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hills"), gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects1);
gdjs.copyArray(runtimeScene.getObjects("forest"), gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects1);
{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects1[i].setXOffset(-(200) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects1[i].setXOffset(gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects1[i].getXOffset() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects1[i].setXOffset(gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects1[i].getXOffset() + (350 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects1[i].setX(gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects1[i].getX() + (1));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "6cbce81a7e7cd46eeacef6f6688bdd82136497c3b9ba5b510d77e068b7bf52e2_Sunny Rasta.aac", false, 30, 1);
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("darkness"), gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScrollText");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Speak");
}{gdjs.dialogueTree.startFrom("Start");
}{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1);
{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1);
{for(var i = 0, len = gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Intro_32Scene_58_32tutorialCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Floor 1:  Whose got Cheese?", false);
}}

}


};

gdjs.Intro_32Scene_58_32tutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDHillsObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDTruckObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDFenceObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDroadObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDforestObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDDialogueObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDOptionsObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDdarknessObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerHealthBarObjects4.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects1.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects2.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects3.length = 0;
gdjs.Intro_32Scene_58_32tutorialCode.GDPlayerObjects4.length = 0;

gdjs.Intro_32Scene_58_32tutorialCode.eventsList8(runtimeScene);

return;

}

gdjs['Intro_32Scene_58_32tutorialCode'] = gdjs.Intro_32Scene_58_32tutorialCode;
