const songsData = [
    
        {
            "id": 1,
            "cover": "https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg",
            "name": "Please Please Me",
            "tracks": [
                "I Saw Her Standing There",
                "Misery",
                "Anna (Go to Him)",
                "Chains",
                "Boys",
                "Ask Me Why",
                "Please Please Me",
                "Love Me Do",
                "P.S. I Love You",
                "Baby It's You",
                "Do You Want to Know a Secret?",
                "A Taste of Honey",
                "There's a Place",
                "Twist and Shout"
            ]
        },
        {
            "id": 2,
            "cover": "https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg",
            "name": "With the Beatles",
            "tracks": [
                "It Won't Be Long",
                "All I've Got to Do",
                "All My Loving",
                "Don't Bother Me",
                "Little Child",
                "Till There Was You",
                "Please Mister Postman",
                "Roll Over Beethoven",
                "Hold Me Tight",
                "You Really Got a Hold on Me",
                "I Wanna Be Your Man",
                "Devil in Her Heart",
                "Not a Second Time",
                "Money (That's What I Want)"
            ]
        },
        {
            "id": 3,
            "cover": "https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg",
            "name": "A Hard Day's Night",
            "tracks": [
                "A Hard Day's Night",
                "I Should Have Known Better",
                "If I Fell",
                "I'm Happy Just to Dance with You",
                "And I Love Her",
                "Tell Me Why",
                "Can't Buy Me Love",
                "Any Time at All",
                "I'll Cry Instead",
                "Things We Said Today",
                "When I Get Home",
                "You Can't Do That",
                "I'll Be Back"
            ]
        },
        {
            "id": 4,
            "cover": "https://upload.wikimedia.org/wikipedia/en/4/40/Beatlesforsale.jpg",
            "name": "Beatles for Sale",
            "tracks": [
                "No Reply",
                "I'm a Loser",
                "Baby's in Black",
                "Rock and Roll Music",
                "I'll Follow the Sun",
                "Mr. Moonlight",
                "Kansas City/Hey, Hey, Hey, Hey",
                "Eight Days a Week",
                "Words of Love",
                "Honey Don't",
                "Every Little Thing",
                "I Don't Want to Spoil the Party",
                "What You're Doing",
                "Everybody's Trying to Be My Baby"
            ]
        },
        {
            "id": 5,
            "cover": "https://upload.wikimedia.org/wikipedia/en/e/e7/Help%21_%28The_Beatles_album_-_cover_art%29.jpg",
            "name": "Help!",
            "tracks": [
                "Help!",
                "The Night Before",
                "You've Got to Hide Your Love Away",
                "I Need You",
                "Another Girl",
                "You're Going to Lose That Girl",
                "Ticket to Ride",
                "Act Naturally",
                "It's Only Love",
                "You Like Me Too Much",
                "Tell Me What You See",
                "I've Just Seen a Face",
                "Yesterday",
                "Dizzy Miss Lizzy"
            ]
        },
        {
            "id": 6,
            "cover": "https://upload.wikimedia.org/wikipedia/en/7/74/Rubber_Soul.jpg",
            "name": "Rubber Soul",
            "tracks": [
                "Drive My Car",
                "Norwegian Wood (This Bird Has Flown)",
                "You Won't See Me",
                "Nowhere Man",
                "Think for Yourself",
                "The Word",
                "Michelle",
                "What Goes On",
                "Girl",
                "I'm Looking Through You",
                "In My Life",
                "Wait",
                "If I Needed Someone",
                "Run for Your Life"
            ]
        },
        {
            "id": 7,
            "cover": "https://www.parlogramauctions.com/Content/listingImages/20210728/b30a884b-9bed-4e2d-901d-63213297a4ea_largesize.jpg",
            "name": "Revolver",
            "tracks": [
                "Good Day Sunshine",
                "And Your Bird Can Sing",
                "For No One",
                "Doctor Robert",
                "I Want to Tell You",
                "Got to Get You into My Life",
                "Tomorrow Never Knows",
                "Taxman",
                "Eleanor Rigby",
                "I'm Only Sleeping",
                "Love You To",
                "Here, There and Everywhere",
                "Yellow Submarine",
                "She Said She Said"
            ]
        },
        {
            "id": 8,
            "cover": "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg",
            "name": "Sgt. Pepper's Lonely Hearts Club Band",
            "tracks": [
                "Sgt. Pepper's Lonely Hearts Club Band",
                "With a Little Help from My Friends",
                "Lucy in the Sky with Diamonds",
                "Getting Better",
                "Fixing a Hole",
                "She's Leaving Home",
                "Being for the Benefit of Mr. Kite!",
                "Within You Without You",
                "When I'm Sixty-Four",
                "Lovely Rita",
                "Good Morning Good Morning",
                "Sgt. Pepper's Lonely Hearts Club Band (Reprise)",
                "A Day in the Life"
            ]
        },
        {
            "id": 9,
            "cover": "https://i.pinimg.com/originals/8c/84/76/8c8476ca85fd0722e8a8fee66afd2cab.png",
            "name": "Magical Mystery Tour",
            "tracks": [
                "Hello, Goodbye",
                "Strawberry Fields Forever",
                "Penny Lane",
                "Baby, You're a Rich Man",
                "All You Need Is Love",
                "Magical Mystery Tour",
                "The Fool on the Hill",
                "Flying",
                "Blue Jay Way",
                "Your Mother Should Know",
                "I Am the Walrus"
            ]
        },
        {
            "id": 10,
            "cover": "https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg",
            "name": "The Beatles (Album 1)",
            "tracks": [
                "Back in the U.S.S.R.",
                "Dear Prudence",
                "Glass Onion",
                "Ob-La-Di, Ob-La-Da",
                "Wild Honey Pie",
                "The Continuing Story of Bungalow Bill",
                "While My Guitar Gently Weeps",
                "Happiness Is a Warm Gun",
                "Martha My Dear",
                "I'm So Tired",
                "Blackbird",
                "Piggies",
                "Rocky Raccoon",
                "Don't Pass Me By",
                "Why Don't We Do It in the Road?",
                "I Will",
                "Julia"
            ]
        },
        {
            "id": 11,
            "cover": "https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg",
            "name": "The Beatles (Album 2)",
            "tracks": [
                "Birthday",
                "Yer Blues",
                "Mother Nature's Son",
                "Everybody's Got Something to Hide Except Me and My Monkey",
                "Sexy Sadie",
                "Helter Skelter",
                "Long, Long, Long",
                "Revolution 1",
                "Honey Pie",
                "Savoy Truffle",
                "Cry Baby Cry",
                "Revolution 9",
                "Good Night"
            ]
        },
        {
            "id": 12,
            "cover": "https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg",
            "name": "Yellow Submarine",
            "tracks": [
                "Yellow Submarine",
                "Only a Northern Song",
                "All Together Now",
                "Hey Bulldog",
                "It's All Too Much",
                "All You Need Is Love",
                "Pepperland",
                "Sea of Time",
                "Sea of Holes",
                "Sea of Monsters",
                "March of the Meanies",
                "Pepperland Laid Waste",
                "Yellow Submarine in Pepperland"
            ]
        },
        {
            "id": 13,
            "cover": "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
            "name": "Abbey Road",
            "tracks": [
                "Come Together",
                "Something",
                "Maxwell's Silver Hammer",
                "Oh! Darling",
                "Octopus's Garden",
                "I Want You (She's So Heavy)",
                "Here Comes the Sun",
                "Because",
                "You Never Give Me Your Money",
                "Sun King",
                "Mean Mr. Mustard",
                "Polythene Pam",
                "She Came in Through the Bathroom Window",
                "Golden Slumbers",
                "Carry That Weight",
                "The End",
                "Her Majesty"
            ]
        },
        {
            "id": 14,
            "cover": "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
            "name": "Let It Be",
            "tracks": [
                "Two of Us",
                "Dig a Pony",
                "Across the Universe",
                "I Me Mine",
                "Dig It",
                "Let It Be",
                "Maggie Mae",
                "I've Got a Feeling",
                "One After 909",
                "The Long and Winding Road",
                "For You Blue",
                "Get Back"
            ]
        },
        {
            "id": 15,
            "cover": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Past_Masters_1.PNG",
            "name": "Past Masters 1",
            "tracks": [
                "Love Me Do",
                "From Me To You",
                "Thank You Girl",
                "She Loves You",
                "I'll Get You",
                "I Want To Hold Your Hand",
                "This Boy",
                "Komm Gib Mir Deine Hand",
                "Sie Liebt Dich",
                "Long Tall Sally",
                "I Call Your Name",
                "Slow Down",
                "Matchbox",
                "I Feel Fine",
                "She's a Woman",
                "Yes it is",
                "I'm Down"
            ]
        },
        {
            "id": 16,
            "cover": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Past_Masters_2.PNG",
            "name": "Past Masters 2",
            "tracks": [
                "Day Tripper",
                "We can work it out",
                "Paperback Writer",
                "Rain",
                "Lady Madonna",
                "The Inner Light",
                "Hey Jude",
                "Revolution",
                "Get Back",
                "Don't Let Me Down",
                "The Ballad of John and Yoko",
                "Old Brown Shoe",
                "Across the Universe",
                "You know my name(Look up the Number)"
            ]
        }
    
];

const songCardsContainer = document.querySelector('.song-cards');

function createSongCard(song) {
    const card = document.createElement('div');
    card.classList.add('song-card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('song-card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('song-card-front');
    cardFront.innerHTML = `
        <img src="${song.cover}" alt="${song.name}" width="100">
    `;

    const cardBack = document.createElement('div');
    cardBack.classList.add('song-card-back');
    cardBack.innerHTML = `
        <h2>${song.name}</h2>
        <ul>
            ${song.tracks.map(track => `<li>${track}</li>`).join('')}
        </ul>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
}

songsData.forEach(song => {
    const card = createSongCard(song);
    songCardsContainer.appendChild(card);
});
