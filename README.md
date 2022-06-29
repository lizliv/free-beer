# Free Beer
 Testing out a website for the free beer guild


Starting inspiration is this build randomizer: https://github.com/Ferndor/AlbionBuildRNG


Use the [render API](https://wiki.albiononline.com/wiki/API:Render_service) to get all item/spell images. This can be finnicky and we will need to figure out the database, but you can always search the [wiki](https://wiki.albiononline.com/wiki/Albion_Online_Wiki) and "copy link" from the images to figure out the render naming scheme.


Albion doesn't have an official API, but players have [accessed the API](https://www.tools4albion.com/api_info.php) they use for killboard and stuff. This could be a good way to bypass scraping [Albion Battles](https://albionbattles.com/).

## Current Version

The current version is raw HTML, CSS, and JS. 

All you need to do is open `builds.html` in a web browser and it should display two build tabs and a randomized build tab. 


## Might switch over to Preact

Using Scaffold from Kwoka in Discord.

`npm init @ekwoka/pett-app`

Use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode to preview the site after

`npm run watch`

Or not, this doesn't really have much? Its for a fast build script. Might want more boilerplate website to start with.


# Legal Stuff

Inspired by tools4albion, here is a legal paragraph regarding all Sandbox Interactive GmbH intellectual property:

Albion Online, the Albion logo, Albion and all associated logos and designs are the intellectual property of Sandbox Interactive GmbH. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of Sandbox Interactive GmbH. Albion Online and the Albion logo are the registered trademarks of Sandbox Interactive GmbH. All rights are reserved worldwide. All other trademarks are the property of their respective owners. Sandbox Interactive GmbH does not endorse, and is not in any way affiliated with, Free Beer Guild Website. Sandbox Interactive GmbH is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.