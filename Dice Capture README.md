[![Capture Dice from DNDBeyond for Streaming/OBS](https://user-images.githubusercontent.com/65363489/150996224-001f9634-2a69-435b-8a70-a2190cb8d500.png)](https://youtu.be/mpB4d-lpnRU")


This requires the character sheet theme to work. Follow instructions in <a href="https://github.com/Azmoria/dndbeyonddark/blob/master/README.md">README.md</a> to install that first. The background color is set in this theme at the bottom of the options. For how to set up character specific themes <a href="https://github.com/Azmoria/dndbeyonddark/blob/master/Character%20Specific%20Themes.md">click here</a>



Then you will need an extention that allows you to install user.js.

 I recommend Tampermonkey. You can get it for <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en">Chrome</a> or <a href="https://addons.mozilla.org/en-CA/firefox/addon/tampermonkey/">Firefox</a>


Then install the js by going <a href="https://github.com/Azmoria/dndbeyonddark/raw/master/Dice%20Tray%20Stream%20Window.user.js">here</a>

It will popup with the below. Click install.

![image](https://user-images.githubusercontent.com/65363489/150918125-1e9cd2a0-b1ae-4ec5-acd1-1bbc727c04f9.png)

Once installed when you load into various parts of the site where dice are enabled it will pop up another window. If it doesn't make sure you are **allowing popups on dndbeyond.** 

You can change the background in the character sheet theme options. The options in the image below apply to the dice roll area.

 ![image](https://user-images.githubusercontent.com/65363489/151418937-3e1a7e51-1ed7-49f6-ad6e-166acff479cd.png)


**Pull the dice tray tab into a seperate window.** You can put it behind the main window but it will not work in chrome with the main window in fullscreen or in a different tab in the same window. Chrome blocks rendering when a window is fully hidden.

If you need to be able to be able to fully hide the dice tray behind the main window you can launch chrome with the --disable-backgrounding-occluded-windows flag in the shortcut target.

![image](https://user-images.githubusercontent.com/65363489/151623771-bab3c82e-e209-4af5-ace3-7fe890261a23.png)

To do this create a chrome shortcut. Right click it and go to properties. Add the flag at the end of the target field as above.



Roll dice in the oringal window. You may have to adjust your dice tray window to fit the rolling area - especially if you change the size of your main window afterwards. 

![image](https://user-images.githubusercontent.com/65363489/150919806-f34d6935-2fd9-46a3-a255-ed7001ea2802.png)

Once you have this set up add the window that starts with "Dice Tray - ..." to your OBS or software of choice.



If you find any issues please let me know either by posting an issue here on github or messaging me directly on discord Azmoria#7532.



