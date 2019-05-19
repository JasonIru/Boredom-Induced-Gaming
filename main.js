(function(){
	var gameArray = [
		{
			name: 'Cave Story',
			img: "image/72.png",
			link: "cave-story.html",
			info: 'Run and gun masterpiece.',
			genre: 'Action, Adventure, Platformer'
		},
		{
			name: 'Cho Ren Sha 68k',
			img: "image/cho32.png",
			link: "cho.html",
			info: 'Arcade quality vertical shooter',
			genre: 'Arcade',
		},
		{
			name: 'Guxt',
			img: "image/guxt23.png",
			link: "guxt.html",
			info: 'Vertical top down shooter by Pixel',
			genre: 'Arcade',
		},
		{
			name: 'Ikachan',
			img: "image/ika23.png",
			link: "ika.html",
			info: 'Underwater adventure',
			genre: 'Action, Adventure'
		},
		{
			name: 'Off',
			img: "image/off23.png",
			link: "off.html",
			info: 'RPG with unsettling vibe',
			genre: 'Adventure, Horror, Puzzle, RPG'
		},
		{
			name: 'Treasure Adventure Game',
			img: "image/tag22.png",
			link: "treasure-adventure-game.html",
			info: 'Pirate themed metroidvania',
			genre: 'Action, Adventure, Platformer'
		},
		{
			name: 'Yume Nikki',
			img: "image/yn23.png",
			link: "yume-nikki.html",
			info: 'Dream exploration game',
			genre: 'Horror, "Puzzle'
		}
		/*{
			name: '',
			img: "image/.png",
			link: ".html",
			info: '',
			genre: '',
		},*/
	];

	var rowArray = [];
	var table = jQuery('#lookTable');
	var findText = jQuery('#lookupText');
	var text = document.getElementById('lookupText');
	var imgTable = jQuery('#imgTable');
	var tag = document.getElementById('tagline');
	var rand = document.getElementById('random');

	function createRow() {
		gameArray.forEach(function(game) {
			var row = jQuery('<tr></tr>');
			row.append( jQuery('<td><a href="'+game.link+'"><img src="'+game.img+'" class="img-fluid" alt="..."></a></td>') );
			row.append( jQuery('<td><a href="'+game.link+'"><p>'+game.name+'</p></a></td>') );
			row.append( jQuery('<td></td>').text(game.info) );
			row.append( jQuery('<td></td>').text(game.genre) );
			rowArray.push({
				game: game,
				element: row
			});
		});
	}

	function addRow() {
		var tbody = jQuery('<tbody></tbody>');
		rowArray.forEach(function(row) {
			tbody.append(row.element);
		});
		table.append(tbody);
	}

	function hideRow() {
		rowArray.forEach(function(row) {
			row.element.hide();
		});
	}

	function update() {
		var query = text.value.trim().toLowerCase();

		rowArray.forEach(function(row) {
			var index = -1;
			if (query) {
				index = row.game.name.trim().toLowerCase().indexOf(query);
			}

			if (index === -1) {
				row.element.hide(300);
			}
			else {
				row.element.show(300);
			}
		});
	}

	/*function randomGame() {
		var rNum = Math.floor( (Math.random() * gameArray.length) + 1);

		rand.innerHTML = '';
	}*/

	function init() {
		createRow();
		addRow();
		hideRow();

		text.addEventListener('input', update);
	}

	jQuery(init);
}());