// テトリスのブロック形状を定義する
const shapes = [	[[1, 1, 1, 1]],

	[[1, 1],
	 [1, 1]],

	[[1, 1, 0],
	 [0, 1, 1]],

	[[0, 1, 1],
	 [1, 1, 0]],

	[[1, 0, 0],
	 [1, 1, 1]],

	[[0, 0, 1],
	 [1, 1, 1]],

	[[1, 1, 1],
	 [0, 0, 1]]
];

// テトリスのブロックの色を定義する
const colors = [	'cyan',	'blue',	'orange',	'yellow',	'green',	'purple',	'red'];

// ゲームの状態を表すオブジェクトを定義する
const state = {
	board: [],
	piece: {},
	score: 0,
	gameOver: false
};

// テトリスのブロックを描画する関数を定義する
function render() {
	const boardElement = document.getElementById('board');

	// ボードを空のブロックで初期化する
	boardElement.innerHTML = '';
	state.board.forEach((row) => {
		const rowElement = document.createElement('div');
		rowElement.classList.add('row');
		row.forEach((cell) => {
			const cellElement = document.createElement('div');
			cellElement.classList.add('cell');
			if (cell !== 0) {
				cellElement.style.backgroundColor = colors[cell - 1];
			}
			rowElement.appendChild(cellElement);
		});
		boardElement.appendChild(rowElement);
	});

	// 現在のテトリスのブロックを描画する
	state.piece.shape.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (cell !== 0) {
				const cellElement = document.createElement('div');
				cellElement.classList.add('cell');
				cellElement.style.backgroundColor = colors[state.piece.color - 1];
				cellElement.style.top = (state.piece.y + y) * 20 + 'px';
				cellElement.style.left = (state.piece.x + x) * 20 + 'px';
				boardElement.appendChild(cellElement);
			}
		});
	});
}

// ゲームを開始する関数を定義する
function start() {
	// ボードを空のブロックで初期化する
	state.board = Array.from({length: 20}, () => Array(10).fill(0));

	// ゲームの状態を初期化する