You can create a theme for each character by creating a copy of the theme and applying it to specific characters. 

To do this click on the extension and click manage.

Open the character sheet theme by clicking on it. 

Select everything (CTRL+A on windows computers) and copy it (CTRL+C).

Go back to the manage view by clicking back to manage on the left.

Next click "Write new style" on the left but make sure "as Usercss" is checked beside it like so:

![image](https://user-images.githubusercontent.com/65363489/121786529-582beb80-cb8e-11eb-8c82-a91ca997bd99.png)

Select all again and paste the original copied theme (CTRL+V)

Click Section 1

![image](https://user-images.githubusercontent.com/65363489/167322711-57aa0890-ef36-4302-9eb1-f0646cc1efdc.png)

Replace the regexp lines with your character sheet url like so:

![image](https://user-images.githubusercontent.com/65363489/167322839-b4686a3f-002e-43ca-a29b-deda88b9135e.png)
The second line is used for the dice tray popup compainion Javascript. You can find more info here: <a href="https://github.com/Azmoria/dndbeyonddark/blob/master/Dice%20Capture%20README.md">Dice Capture README.md</a>

and replace the regexp lines again further down for AboveVTT in section 2:

![image](https://user-images.githubusercontent.com/65363489/167322930-c049493e-b7d6-46dc-ac6c-fa89305bbee1.png)

You will also have to change the name of the file at the very top beside @name before it will let you save it. 
I change this to my character name but you can name it whatever you would like. I also suggestion removing the update url and changing @namespace.

![image](https://user-images.githubusercontent.com/65363489/146813954-f1f93c6d-9e5a-4614-bcaf-a82f01b29eb9.png)


Click save on the left.


Go to the character sheet you made the theme for. Click on stylus again. Click the three dots beside the original theme and check Exclude the current URL. This will also exclude the dice tray if you have it installed. 

![image](https://user-images.githubusercontent.com/65363489/121786601-d8525100-cb8e-11eb-8505-c6d6c95489d0.png)

Style the theme you created to your liking and you're done. 

***NOTE:*** Character specific themes will not automatically update as they have manual changes. You can manually update them by forcing the update but it will overide your changes and you will have to repeat the above steps starting with changing the name and replacing the URL.


[![DNDBeyond Dark Mode and Dice Coloration](https://user-images.githubusercontent.com/65363489/121787540-988e6800-cb94-11eb-9ca0-695b3a45caa6.png)](https://www.youtube.com/watch?v=DbYnbr3esnI "DNDBeyond Dark Mode and Dice Coloration")

See here for more information on creating a companion style - or if you would like assistance setting this up you can add me on discord at Azmoria#7532

https://github.com/openstyles/stylus/wiki/Writing-styles#making-a-companion-style
