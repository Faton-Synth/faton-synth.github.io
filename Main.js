var notes = [
	"C", "C#",
	"D", "D#",
	"E", "F",
	"F#", "G",
	"G#", "A",
	"A#", "B",
];

for (var i = 0; i < 12; ++i) {
	if (notes[i].match(/#$/)) {
		document.body.innerHTML = "<span style=\"background: Black; color: White;\">" + notes[i] + "</span>";
	} else {
		document.body.innerHTML = "<span style=\"background: White; color: Black;\">" + notes[i] + "</span>";
	}
}
