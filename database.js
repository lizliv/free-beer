var    slots = [
      "bag",
      "helmet",
      "helmet-detail",
      "cape",
      "weapon",
      "weapon-detail",
      "armor",
      "armor-detail",
      "offhand",
      "food",
      "shoes",
      "shoes-detail",
      "potion",
      "mount"
];

var    itemdb = [
      // *****************************************************************************
      // * helmet - mage
      // *****************************************************************************
      {
        slot: "helmet",
        title: "Scholar Cowl",
        name: "HEAD_CLOTH_SET1"
      },
      {
        slot: "helmet",
        title: "Cleric Cowl",
        name: "HEAD_CLOTH_SET2"
      },
      {
        slot: "helmet",
        title: "Mage Cowl",
        name: "HEAD_CLOTH_SET3"
      },
      {
        slot: "helmet",
        title: "Cowl of Purity",
        name: "HEAD_CLOTH_AVALON"
      },
      {
        slot: "helmet",
        title: "Fiend Cowl",
        name: "HEAD_CLOTH_HELL"
      },
      {
        slot: "helmet",
        title: "Druid Cowl",
        name: "HEAD_CLOTH_KEEPER"
      },
      {
        slot: "helmet",
        title: "Cultist Cowl",
        name: "HEAD_CLOTH_MORGANA"
      },
      {
        slot: "helmet",
        title: "Royal Cowl",
        name: "HEAD_CLOTH_ROYAL"
      },
      // *****************************************************************************
      // * helmet - hunter
      // *****************************************************************************
      {
        slot: "helmet",
        title: "Mercenary Hood",
        name: "HEAD_LEATHER_SET1"
      },
      {
        slot: "helmet",
        title: "Hunter Hood",
        name: "HEAD_LEATHER_SET2"
      },
      {
        slot: "helmet",
        title: "Assassin Hood",
        name: "HEAD_LEATHER_SET3"
      },
      {
        slot: "helmet",
        title: "Hood of Tenacity",
        name: "HEAD_LEATHER_AVALON"
      },
      {
        slot: "helmet",
        title: "Hellion Hood",
        name: "HEAD_LEATHER_HELL"
      },
      {
        slot: "helmet",
        title: "Specter Hood",
        name: "HEAD_LEATHER_UNDEAD"
      },
      {
        slot: "helmet",
        title: "Stalker Hood",
        name: "HEAD_LEATHER_MORGANA"
      },
      {
        slot: "helmet",
        title: "Royal Hood",
        name: "HEAD_LEATHER_ROYAL"
      },
      // *****************************************************************************
      // * helmet - warrior
      // *****************************************************************************
      {
        slot: "helmet",
        title: "Soldier Helmet",
        name: "HEAD_PLATE_SET1"
      },
      {
        slot: "helmet",
        title: "Knight Helmet",
        name: "HEAD_PLATE_SET2"
      },
      {
        slot: "helmet",
        title: "Guardian Helmet",
        name: "HEAD_PLATE_SET3"
      },
      {
        slot: "helmet",
        title: "Helmet of Valor",
        name: "HEAD_PLATE_AVALON"
      },
      {
        slot: "helmet",
        title: "Demon Helmet",
        name: "HEAD_PLATE_HELL"
      },
      {
        slot: "helmet",
        title: "Graveguard Helmet",
        name: "HEAD_PLATE_UNDEAD"
      },
      {
        slot: "helmet",
        title: "Judicator Helmet",
        name: "HEAD_PLATE_KEEPER"
      },
      {
        slot: "helmet",
        title: "Royal Helmet",
        name: "HEAD_PLATE_ROYAL"
      },
      // *****************************************************************************
      // * shoes - mage
      // *****************************************************************************
      {
        slot: "shoes",
        title: "Scholar Sandals",
        name: "SHOES_CLOTH_SET1"
      },
      {
        slot: "shoes",
        title: "Cleric Sandals",
        name: "SHOES_CLOTH_SET2"
      },
      {
        slot: "shoes",
        title: "Mage Sandals",
        name: "SHOES_CLOTH_SET3"
      },
      {
        slot: "shoes",
        title: "Sandals of Purity",
        name: "SHOES_CLOTH_AVALON"
      },
      {
        slot: "shoes",
        title: "Fiend Sandals",
        name: "SHOES_CLOTH_HELL"
      },
      {
        slot: "shoes",
        title: "Druid Sandals",
        name: "SHOES_CLOTH_KEEPER"
      },
      {
        slot: "shoes",
        title: "Cultist Sandals",
        name: "SHOES_CLOTH_MORGANA"
      },
      {
        slot: "shoes",
        title: "Royal Sandals",
        name: "SHOES_CLOTH_ROYAL"
      },
      // *****************************************************************************
      // * shoes - hunter
      // *****************************************************************************
      {
        slot: "shoes",
        title: "Mercenary Shoes",
        name: "SHOES_LEATHER_SET1"
      },
      {
        slot: "shoes",
        title: "Hunter Shoes",
        name: "SHOES_LEATHER_SET2"
      },
      {
        slot: "shoes",
        title: "Assassin Shoes",
        name: "SHOES_LEATHER_SET3"
      },
      {
        slot: "shoes",
        title: "Shoes of Tenacity",
        name: "SHOES_LEATHER_AVALON"
      },
      {
        slot: "shoes",
        title: "Hellion Shoes",
        name: "SHOES_LEATHER_HELL"
      },
      {
        slot: "shoes",
        title: "Specter Shoes",
        name: "SHOES_LEATHER_UNDEAD"
      },
      {
        slot: "shoes",
        title: "Stalker Shoes",
        name: "SHOES_LEATHER_MORGANA"
      },
      {
        slot: "shoes",
        title: "Royal Shoes",
        name: "SHOES_LEATHER_ROYAL"
      },
      // *****************************************************************************
      // * shoes - warrior
      // *****************************************************************************
      {
        slot: "shoes",
        title: "Soldier Boots",
        name: "SHOES_PLATE_SET1"
      },
      {
        slot: "shoes",
        title: "Knight Boots",
        name: "SHOES_PLATE_SET2"
      },
      {
        slot: "shoes",
        title: "Guardian Boots",
        name: "SHOES_PLATE_SET3"
      },
      {
        slot: "shoes",
        title: "Boots of Valor",
        name: "SHOES_PLATE_AVALON"
      },
      {
        slot: "shoes",
        title: "Demon Boots",
        name: "SHOES_PLATE_HELL"
      },
      {
        slot: "shoes",
        title: "Graveguard Boots",
        name: "SHOES_PLATE_UNDEAD"
      },
      {
        slot: "shoes",
        title: "Judicator Boots",
        name: "SHOES_PLATE_KEEPER"
      },
      {
        slot: "shoes",
        title: "Royal Boots",
        name: "SHOES_PLATE_ROYAL"
      },
      // *****************************************************************************
      // * cape
      // *****************************************************************************
      {
        slot: "cape",
        title: "Cape",
        name: "CAPE"
      },
      {
        slot: "cape",
        title: "Bridgewatch Cape",
        name: "CAPEITEM_FW_BRIDGEWATCH"
      },
      {
        slot: "cape",
        title: "Fort Sterling Cape",
        name: "CAPEITEM_FW_FORTSTERLING"
      },
      {
        slot: "cape",
        title: "Lymhurst Cape",
        name: "CAPEITEM_FW_LYMHURST"
      },
      {
        slot: "cape",
        title: "Martlock Cape",
        name: "CAPEITEM_FW_MARTLOCK"
      },
      {
        slot: "cape",
        title: "Thetford Cape",
        name: "CAPEITEM_FW_THETFORD"
      },
      {
        slot: "cape",
        title: "Caerleon Cape",
        name: "CAPEITEM_FW_CAERLEON"
      },
      {
        slot: "cape",
        title: "Undead Cape",
        name: "CAPEITEM_UNDEAD"
      },
      {
        slot: "cape",
        title: "Heretic Cape",
        name: "CAPEITEM_HERETIC"
      },
      {
        slot: "cape",
        title: "Demon Cape",
        name: "CAPEITEM_DEMON"
      },
      {
        slot: "cape",
        title: "Morgana Cape",
        name: "CAPEITEM_MORGANA"
      },
      // *****************************************************************************
      // * bag
      // *****************************************************************************
      {
        slot: "bag",
        title: "Bag",
        name: "BAG"
      },
      {
        slot: "bag",
        title: "Satchel of Insight",
        name: "BAG_INSIGHT"
      },
      // *****************************************************************************
      // * mount
      // *****************************************************************************
      {
        slot: "mount",
        title: "Bag",
        name: "T2_MOUNT_MULE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Horse",
        name: "MOUNT_HORSE"
      },
      {
        slot: "mount",
        title: "Armored Horse",
        name: "MOUNT_ARMORED_HORSE"
      },
      {
        slot: "mount",
        title: "Ox",
        name: "MOUNT_OX"
      },
      {
        slot: "mount",
        title: "Giant Stag",
        name: "T4_MOUNT_GIANTSTAG",
        exactname: true
      },
      {
        slot: "mount",
        title: "Moose",
        name: "T6_MOUNT_GIANTSTAG_MOOSE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Direwolf",
        name: "T6_MOUNT_DIREWOLF",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Direboar",
        name: "T7_MOUNT_DIREBOAR",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Swamp Dragon",
        name: "T7_MOUNT_SWAMPDRAGON",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Direbear",
        name: "T8_MOUNT_DIREBEAR",
        exactname: true
      },
      {
        slot: "mount",
        title: "Transport Mammoth",
        name: "T8_MOUNT_MAMMOTH_TRANSPORT",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Moabird",
        name: "T5_MOUNT_MOABIRD_FW_BRIDGEWATCH",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Winter Bear",
        name: "T5_MOUNT_DIREBEAR_FW_FORTSTERLING",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Wild Boar",
        name: "T5_MOUNT_DIREBOAR_FW_LYMHURST",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Bighorn Ram",
        name: "T5_MOUNT_RAM_FW_MARTLOCK",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Swamp Salamander",
        name: "T5_MOUNT_SWAMPDRAGON_FW_THETFORD",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Greywolf",
        name: "T5_MOUNT_GREYWOLF_FW_CAERLEON",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elite Terrorbird",
        name: "T8_MOUNT_MOABIRD_FW_BRIDGEWATCH_ELITE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elite Winterbear",
        name: "T8_MOUNT_DIREBEAR_FW_FORTSTERLING_ELITE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elite Wildboar",
        name: "T8_MOUNT_DIREBOAR_FW_LYMHURST_ELITE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elite Bighorn Ram",
        name: "T8_MOUNT_RAM_FW_MARTLOCK_ELITE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elite Swamp Salamander",
        name: "T8_MOUNT_SWAMPDRAGON_FW_THETFORD_ELITE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elite Greywolf",
        name: "T8_MOUNT_GREYWOLF_FW_CAERLEON_ELITE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Elder's Command Mammoth",
        name: "T8_MOUNT_MAMMOTH_BATTLE@1",
        exactname: true
      },
      {
        slot: "mount",
        title: "Flame Basilisk",
        name: "T7_MOUNT_SWAMPDRAGON_BATTLE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Venom Basilisk",
        name: "T7_MOUNT_ARMORED_SWAMPDRAGON_BATTLE",
        exactname: true
      },
      {
        slot: "mount",
        title: "Siege Ballista",
        name: "T6_MOUNT_SIEGE_BALLISTA",
        exactname: true
      },
      {
        slot: "mount",
        title: "Spectral Bonehorse",
        name: "T8_MOUNT_HORSE_UNDEAD@1",
        exactname: true
      },
      {
        slot: "mount",
        title: "Swiftclaw",
        name: "T5_MOUNT_COUGAR_KEEPER@1",
        exactname: true
      },
      {
        slot: "mount",
        title: "Rageclaw",
        name: "T8_MOUNT_COUGAR_KEEPER@1",
        exactname: true
      },
      {
        slot: "mount",
        title: "Morgana Nightmare",
        name: "T8_MOUNT_ARMORED_HORSE_MORGANA@1",
        exactname: true
      },
      {
        slot: "mount",
        title: "Yule Ram",
        name: "UNIQUE_MOUNT_RAM_XMAS",
        exactname: true
      },
      {
        slot: "mount",
        title: "Avalonian Basilisk",
        name: "T7_MOUNT_SWAMPDRAGON_AVALON_BASILISK",
        exactname: true
      },
      {
        slot: "mount",
        title: "Recruiter's Ram",
        name: "UNIQUE_MOUNT_RAM_TELLAFRIEND",
        exactname: true
      },
      {
        slot: "mount",
        title: "Recruiter's Moabird",
        name: "UNIQUE_MOUNT_MOABIRD_TELLAFRIEND",
        exactname: true
      },
      {
        slot: "mount",
        title: "Recruiter's Saddled Bat",
        name: "UNIQUE_MOUNT_BAT_TELLAFRIEND",
        exactname: true
      },
      {
        slot: "mount",
        title: "Recruiter's Toad",
        name: "UNIQUE_MOUNT_GIANTTOAD_TELLAFRIEND",
        exactname: true
      },
      {
        slot: "mount",
        title: "Recruiter's Giant Frog",
        name: "UNIQUE_MOUNT_GIANTTOAD_02_TELLAFRIEND",
        exactname: true
      },
      {
        slot: "mount",
        title: "Spectral Bat",
        name: "UNIQUE_MOUNT_BAT_PERSONAL",
        exactname: true
      },
      {
        slot: "mount",
        title: "Pest Lizard",
        name: "T7_MOUNT_MONITORLIZARD_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Snow Husky",
        name: "T7_MOUNT_HUSKY_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Frost Ram",
        name: "T6_MOUNT_FROSTRAM_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Saddled Terrorbird",
        name: "T7_MOUNT_TERRORBIRD_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Grizzly Bear",
        name: "UNIQUE_MOUNT_BEAR_KEEPER_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Black Panther",
        name: "UNIQUE_MOUNT_BLACK_PANTHER_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Morgana Raven",
        name: "UNIQUE_MOUNT_MORGANA_RAVEN_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Giant Horse",
        name: "UNIQUE_MOUNT_GIANT_HORSE_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Spectral Direboar",
        name: "UNIQUE_MOUNT_UNDEAD_DIREBOAR_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Divine Owl",
        name: "UNIQUE_MOUNT_DIVINE_OWL_ADC",
        exactname: true
      },
      {
        slot: "mount",
        title: "Heretic Combat Mule",
        name: "UNIQUE_MOUNT_HERETIC_MULE_ADC",
        exactname: true
      },
      // *****************************************************************************
      // * armor -mage
      // *****************************************************************************
      {
        slot: "armor",
        title: "Scholar Robe",
        name: "ARMOR_CLOTH_SET1"
      },
      {
        slot: "armor",
        title: "Cleric Robe",
        name: "ARMOR_CLOTH_SET2"
      },
      {
        slot: "armor",
        title: "Mage Robe",
        name: "ARMOR_CLOTH_SET3"
      },
      {
        slot: "armor",
        title: "Robe of Purity",
        name: "ARMOR_CLOTH_AVALON"
      },
      {
        slot: "armor",
        title: "Fiend Robe",
        name: "ARMOR_CLOTH_HELL"
      },
      {
        slot: "armor",
        title: "Druid Robe",
        name: "ARMOR_CLOTH_KEEPER"
      },
      {
        slot: "armor",
        title: "Cultist Robe",
        name: "ARMOR_CLOTH_MORGANA"
      },
      {
        slot: "armor",
        title: "Royal Robe",
        name: "ARMOR_CLOTH_ROYAL"
      },
      // *****************************************************************************
      // * armor -hunter
      // *****************************************************************************
      {
        slot: "armor",
        title: "Mercenary Jacket",
        name: "ARMOR_LEATHER_SET1"
      },
      {
        slot: "armor",
        title: "Hunter Jacket",
        name: "ARMOR_LEATHER_SET2"
      },
      {
        slot: "armor",
        title: "Assassin Jacket",
        name: "ARMOR_LEATHER_SET3"
      },
      {
        slot: "armor",
        title: "Jacket of Tenacity",
        name: "ARMOR_LEATHER_AVALON"
      },
      {
        slot: "armor",
        title: "Hellion Jacket",
        name: "ARMOR_LEATHER_HELL"
      },
      {
        slot: "armor",
        title: "Stalker Jacket",
        name: "ARMOR_LEATHER_MORGANA"
      },
      {
        slot: "armor",
        title: "Specter Jacket",
        name: "ARMOR_LEATHER_UNDEAD"
      },
      {
        slot: "armor",
        title: "Royal Robe",
        name: "ARMOR_LEATHER_ROYAL"
      },
      // *****************************************************************************
      // * armor -warrior
      // *****************************************************************************
      {
        slot: "armor",
        title: "Soldier Armor",
        name: "ARMOR_PLATE_SET1"
      },
      {
        slot: "armor",
        title: "Knight Armor",
        name: "ARMOR_PLATE_SET2"
      },
      {
        slot: "armor",
        title: "Guardian Armor",
        name: "ARMOR_PLATE_SET3"
      },
      {
        slot: "armor",
        title: "Armor of Valor",
        name: "ARMOR_PLATE_AVALON"
      },
      {
        slot: "armor",
        title: "Demon Armor",
        name: "ARMOR_PLATE_HELL"
      },
      {
        slot: "armor",
        title: "Judicator Armor",
        name: "ARMOR_PLATE_KEEPER"
      },
      {
        slot: "armor",
        title: "Graveguard Armor",
        name: "ARMOR_PLATE_UNDEAD"
      },
      {
        slot: "armor",
        title: "Royal Armor",
        name: "ARMOR_PLATE_ROYAL"
      },
      // *****************************************************************************
      // * offhand - mage
      // *****************************************************************************
      {
        slot: "offhand",
        title: "Tome of Spells",
        name: "OFF_BOOK"
      },
      {
        slot: "offhand",
        title: "Eye of Secrets",
        name: "OFF_ORB_MORGANA"
      },
      {
        slot: "offhand",
        title: "Muisak",
        name: "OFF_DEMONSKULL_HELL"
      },
      {
        slot: "offhand",
        title: "Taproot",
        name: "OFF_TOTEM_KEEPER"
      },
      {
        slot: "offhand",
        title: "Celestial Censer",
        name: "OFF_CENSER_AVALON"
      },
      // *****************************************************************************
      // * offhand - hunter
      // *****************************************************************************
      {
        slot: "offhand",
        title: "Torch",
        name: "OFF_TORCH"
      },
      {
        slot: "offhand",
        title: "Mistcaller",
        name: "OFF_HORN_KEEPER"
      },
      {
        slot: "offhand",
        title: "Leering Cane",
        name: "OFF_JESTERCANE_HELL"
      },
      {
        slot: "offhand",
        title: "Cryptcandle",
        name: "OFF_LAMP_UNDEAD"
      },
      {
        slot: "offhand",
        title: "Sacred Scepter",
        name: "OFF_TALISMAN_AVALON"
      },
      // *****************************************************************************
      // * offhand - warrior
      // *****************************************************************************
      {
        slot: "offhand",
        title: "Shield",
        name: "OFF_SHIELD"
      },
      {
        slot: "offhand",
        title: "Sarcophagus",
        name: "OFF_TOWERSHIELD_UNDEAD"
      },
      {
        slot: "offhand",
        title: "Caitiff Shield",
        name: "OFF_SHIELD_HELL"
      },
      {
        slot: "offhand",
        title: "Facebreaker",
        name: "OFF_SPIKEDSHIELD_MORGANA"
      },
      {
        slot: "offhand",
        title: "Astral Aegis",
        name: "OFF_SHIELD_AVALON"
      },
      // *****************************************************************************
      // * weapon - mage/curse 
      // *****************************************************************************
      {
        slot: "weapon",
        title: "Cursed Staff",
        name: "MAIN_CURSEDSTAFF",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Shadowcaller",
        name: "MAIN_CURSEDSTAFF_AVALON",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Lifecurse Staff",
        name: "MAIN_CURSEDSTAFF_UNDEAD",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Great Cursed Staff",
        name: "2H_CURSEDSTAFF"
      },
      {
        slot: "weapon",
        title: "Cursed Skull",
        name: "2H_SKULLORB_HELL"
      },
      {
        slot: "weapon",
        title: "Demonic Staff",
        name: "2H_DEMONICSTAFF"
      },
      {
        slot: "weapon",
        title: "Damnation Staff",
        name: "2H_CURSEDSTAFF_MORGANA"
      },
      {
        slot: "weapon-q",
        weaponCat: "Curse",
        title: "Vile Curse",
        name: "vile%20curse",
      },
      {
        slot: "weapon-q",
        weaponCat: "Curse",
        title: "Cursed Sickle",
        name: "Cursed%20Sickle",
      },
      {
        slot: "weapon-w",
        weaponCat: "Curse",
        title: "Armor Piercer",
        name: "Armor Piercer",
      },
      {
        slot: "weapon-w",
        weaponCat: "Curse",
        title: "Cursed Beam",
        name: "Cursed Beam",
      },
      {
        slot: "weapon-w",
        weaponCat: "Curse",
        title: "Desecrate",
        name: "Desecrate",
      },
      {
        slot: "weapon-w",
        weaponCat: "Curse",
        title: "Grudge",
        name: "Grudge",
      },
      {
        slot: "weapon-w",
        weaponCat: "Curse",
        title: "Dark Matter",
        name: "Dark Matter",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Inner Shadow",
        name: "Inner Shadow",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Haunting Screams",
        name: "Haunting Screams",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Area of Decay",
        name: "Area of Decay",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Enfeeble Blades",
        name: "Enfeeble Blades",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Death Curse",
        name: "Death Curse",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Anguished Soul",
        name: "Anguished Soul",
      },
      {
        slot: "weapon-e",
        weaponCat: "Curse",
        title: "Cataclysm",
        name: "Cataclysm",
      },
      {
        slot: "weapon-passive",
        weaponCat: "Curse",
        title: "Bane",
        name: "Bane",
      },
      {
        slot: "weapon-passive",
        weaponCat: "Curse",
        title: "Energetic",
        name: "Energetic",
      },
      {
        slot: "weapon-passive",
        weaponCat: "Curse",
        title: "Furious",
        name: "Furious",
      },
      {
        slot: "weapon-passive",
        weaponCat: "Curse",
        title: "Hit and Run",
        name: "Hit and Run",
      },
      // *****************************************************************************
      // * weapon - mage/arcane 
      // *****************************************************************************
      {
        slot: "weapon",
        title: "Arcane Staff",
        name: "MAIN_ARCANESTAFF",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Witchwork Staff",
        name: "MAIN_ARCANESTAFF_UNDEAD",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Evensong",
        name: "2H_ARCANE_RINGPAIR_AVALON",
      },
      {
        slot: "weapon",
        title: "Great Arcane Staff",
        name: "2H_ARCANESTAFF"
      },
      {
        slot: "weapon",
        title: "Enigmatic Staff",
        name: "2H_ENIGMATICSTAFF"
      },
      {
        slot: "weapon",
        title: "Occult Staff",
        name: "2H_ARCANESTAFF_HELL"
      },
      {
        slot: "weapon",
        title: "Malevolent Locus",
        name: "2H_ENIGMATICORB_MORGANA"
      },
      // *****************************************************************************
      // * weapon - mage/fire 
      // *****************************************************************************
      {
        slot: "weapon",
        title: "Fire Staff",
        name: "MAIN_FIRESTAFF",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Great Fire Staff",
        name: "2H_FIRESTAFF"
      },
      {
        slot: "weapon",
        title: "Dawnsong",
        name: "2H_FIRE_RINGPAIR_AVALON",
      },
      {
        slot: "weapon",
        title: "Infernal Staff",
        name: "2H_INFERNOSTAFF",
      },
      {
        slot: "weapon",
        title: "Wildfire Staff",
        name: "MAIN_FIRESTAFF_KEEPER"
      },
      {
        slot: "weapon",
        title: "Brimstone Staff",
        name: "2H_FIRESTAFF_HELL"
      },
      {
        slot: "weapon",
        title: "Blazing Staff",
        name: "2H_INFERNOSTAFF_MORGANA"
      },
      // *****************************************************************************
      // * weapon - mage/frost 
      // *****************************************************************************
      {
        slot: "weapon",
        title: "Frost Staff",
        name: "MAIN_FROSTSTAFF",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Great Frost Staff",
        name: "2H_FROSTSTAFF"
      },
      {
        slot: "weapon",
        title: "Glacial Staff",
        name: "2H_GLACIALSTAFF",
      },
      {
        slot: "weapon",
        title: "Hoarfrost Staff",
        name: "MAIN_FROSTSTAFF_KEEPER"
      },
      {
        slot: "weapon",
        title: "Icicle Staff",
        name: "2H_ICEGAUNTLETS_HELL"
      },
      {
        slot: "weapon",
        title: "Permafrost Prism",
        name: "2H_ICECRYSTAL_UNDEAD"
      },
      {
        slot: "weapon",
        title: "Chillhowl",
        name: "MAIN_FROSTSTAFF_AVALON",
        twohand: false
      },
      // *****************************************************************************
      // * weapon - mage/holy 
      // *****************************************************************************
      {
        slot: "weapon",
        title: "Holy Staff",
        name: "MAIN_HOLYSTAFF",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Great Holy Staff",
        name: "2H_HOLYSTAFF"
      },
      {
        slot: "weapon",
        title: "Divine Staff",
        name: "2H_DIVINESTAFF",
      },
      {
        slot: "weapon",
        title: "Lifetouch Staff",
        name: "MAIN_HOLYSTAFF_MORGANA",
        twohand: false
      },
      {
        slot: "weapon",
        title: "Fallen Staff",
        name: "2H_HOLYSTAFF_HELL"
      },
      {
        slot: "weapon",
        title: "Redemption Staff",
        name: "2H_HOLYSTAFF_UNDEAD"
      },
      {
        slot: "weapon",
        title: "Hallowfall",
        name: "MAIN_HOLYSTAFF_AVALON",
        twohand: false
      },
    ];