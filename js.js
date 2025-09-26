// Simple demo bios. Replace or expand as needed.
const artists = {
    1: {
        name: "DJ Sonic",
        bio: "A world-renowned EDM artist bringing high energy and unforgettable beats to the main stage.",
        img: "images/artist1.jpg",
        time: "8:00 PM, Main Stage"
    },
    2: {
        name: "Indie Vibes",
        bio: "Up-and-coming indie band known for their soulful lyrics and vibrant performances.",
        img: "images/artist2.jpg",
        time: "6:30 PM, Indie Stage"
    },
    3: {
        name: "EDM Beat",
        bio: "Famous for mixing electronic rhythms with live instruments for a unique experience.",
        img: "images/artist3.jpg",
        time: "10:00 PM, Electronica"
    }
    // Add more artists here
};

$('#artistModal').on('show.bs.modal', function (event) {
    const card = $(event.relatedTarget);
    const artistId = card.data('artist');
    const artist = artists[artistId];
    if (artist) {
        $('#artistModalLabel').text(artist.name);
        $('#artistModalBody').html(`
            <img src="${artist.img}" alt="${artist.name}" class="img-fluid mb-3">
            <p><strong>Performance:</strong> ${artist.time}</p>
            <p>${artist.bio}</p>
        `);
    }
});
