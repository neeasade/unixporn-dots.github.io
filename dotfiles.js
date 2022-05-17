const dotfiles = [
    {
        title: 'AmogOS',
        author: 'Amog-OS',
        link: 'https://github.com/Amog-OS/AmogOS',
        reddit: 'https://www.reddit.com/r/unixporn/comments/nhomed/cinnamon_amogos_is_complete_icon_art_idea_by_u/?utm_source=share&utm_medium=web2x&context=3',
        description: 'A parody OS inspired by Among Us',
        image: 'assets/AmogOS.webp',
        tags: ['openbox', 'lxde', 'xfce4-panel']
    },
    {
        title: "Your cool neighbor's living room",
        author: 'neeasade',
        link: 'http://noriceno.life',
        reddit: 'https://old.reddit.com/r/unixporn/comments/hos5rp/bspwm_your_cool_neighbors_living_room/',
        description: 'First rice for i3-gaps ',
        image: "assets/codeheister's-dotfiles.png",
        tags: ['i3-gaps', 'rofi', 'nvim', 'ranger', 'dunst', 'flameshot']
    },
    {
        title: "CodeHeister's Dotfiles",
        author: 'CodeHeister',
        link: 'https://github.com/CodeHeister/dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/sjroxe/i3gaps_my_onedarknord_rice_after_a_month_what_do/?utm_source=share&utm_medium=web2x&context=3',
        description: 'First rice for i3-gaps ',
        image: "https://i.redd.it/uivvseeo42a51.png",
        tags: ['bspwm', 'emacs', 'rofi', 'lemonbar']
    },
    {
        title: "Elena's Dotfiles",
        author: 'elenapan',
        link: 'https://github.com/elenapan/dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/hpakeu/awesome_afternoon_in_a_perfect_world/?utm_source=share&utm_medium=web2x&context=3',
        description: 'There is no place like ~/',
        image: "assets/elena's-dotfiles.png",
        tags: ['awesomewm', 'zsh', 'kitty', 'rofi']
    },
    {
        title: "Axarva's Dotfiles",
        author: 'Axarva',
        link: 'https://github.com/Axarva/dotfiles-2.0',
        reddit: 'https://www.reddit.com/r/unixporn/comments/knv0r4/xmonad_youhavenoideawhatspossible_edition/?utm_source=share&utm_medium=web2x&context=3',
        description: 'XMonad. Widgets go brr.',
        image: "assets/axarva's-dotfiles.png",
        tags: ['xmonad', 'eww', 'rofi', 'alacritty', 'tint2']
    },
    {
        title: 'Nebula',
        author: 'Barbaross93',
        link: 'https://github.com/Barbaross93/Nebula',
        reddit: 'https://www.reddit.com/r/unixporn/comments/kzd6zt/qtile_genome/?utm_source=share&utm_medium=web2x&context=3',
        description: 'Desktop setup',
        image: 'assets/nebula.png',
        tags: ['qtile', 'alacritty', 'zsh', 'eww', 'dunst']
    },
    {
        title: 'Floppy',
        author: 'manilarome',
        link: 'https://github.com/manilarome/the-glorious-dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3',
        description: 'Floppy was meant to be a clone of the infamous Flurry Desktop. I named it Floppy because I thought it would flop when I first posted it on r/unixporn. This is my favorite.',
        image: 'assets/floppy.webp',
        tags: ['awesomewm', 'rofi', 'kitty', 'fish']
    },
    {
        title: 'GNawesoME',
        author: 'manilarome',
        link: 'https://github.com/manilarome/the-glorious-dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3',
        description: "Yes, GNawesOME is a weird name. GNawesOME was meant to be a GNOME clone. Instead, it became a hybrid of macOS, iOS, GNOME, and Deepin. I regret nothing.",
        image: 'assets/gnawesome.webp',
        tags: ['awesomewm', 'rofi', 'kitty', 'fish']
    },
    {
        title: 'Linear',
        author: 'manilarome',
        link: 'https://github.com/manilarome/the-glorious-dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3',
        description: 'A setup full of borders and lines. Awesome right?',
        image: 'assets/linear.webp',
        tags: ['awesomewm', 'rofi', 'kitty', 'fish']
    },
    {
        title: 'Surreal',
        author: 'manilarome',
        link: 'https://github.com/manilarome/the-glorious-dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3',
        description: "Yes, I copied the macOS Big Sur design. Many linux elitists will hate it but I don't care. Cry me a river.",
        image: 'assets/surreal.webp',
        tags: ['awesomewm', 'rofi', 'kitty', 'fish']
    },
    {
        title: 'M3 Dotfiles',
        author: 'saimoomedits',
        link: 'https://github.com/saimoomedits/dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/uo1pya/awesome_spent_way_too_long_on_this/?utm_source=share&utm_medium=web2x&context=3',
        description: 'This an awesomewm rice/setup inspired by the infamous "material you."',
        image: 'assets/m3-dotfiles.png',
        tags: ['awesomewm', 'alacritty', 'wibar', 'mpd']
    },
    {
        title: "rxyhn's dotfiles",
        author: 'rxyhn',
        link: 'https://github.com/rxyhn/dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/ual8w7/awesome_aesthetic_beautiful_pastel/?utm_source=share&utm_medium=web2x&context=3',
        description: 'Beautiful & Aesthetic AwesomeWM Configuration Files!',
        image: "assets/rxyhn's-dotfiles.png",
        tags: ['awesomewm', 'alacritty', 'rofi', 'ncmpcpp']
    },
    {
        title: "ChocolateBread799's dotfiles",
        author: 'ChocolateBread799',
        link: 'https://github.com/ChocolateBread799/dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/td7ob3/awesomewm_its_not_an_apple_ad/?utm_source=share&utm_medium=web2x&context=3',
        description: 'My Awesomewm dotfiles',
        image: "assets/chocolatebread799's-dotfiles.png",
        tags: ['awesomewm', 'hilbish', 'wezterm']
    },
    {
        title: "Rashad-707's dotfiles",
        author: 'Rashad-707',
        link: 'https://github.com/Rashad-707/dotfiles',
        reddit: 'https://www.reddit.com/r/unixporn/comments/pq8m5r/dwm_widgets_two_layout_do_you_like_light_theme/?utm_source=share&utm_medium=web2x&context=3',
        description: 'A backup of my Linux setup',
        image: "assets/rashad-707's-dotfiles.png",
        tags: ['dwm', 'kde', 'dunst','eww','polybar','rofi']
    },
    {
        title: "Aether Desktop",
        author: 'ilham25',
        link: 'https://github.com/ilham25/dotfiles-openbox',
        reddit: 'https://www.reddit.com/r/unixporn/comments/qy1you/openbox_aether_desktop/?utm_source=share&utm_medium=web2x&context=3',
        description: 'Here is my aether dotfiles openbox version ',
        image: "assets/aether-desktop.png",
        tags: ['openbox', 'urxvt', 'dunst', 'tint2', 'rofi']
    },
]
