"use strict";
var TextUtilsModule = (function(doc) {
	var _utils = {
		capitalize: function(value) {
			return value.charAt(0).toUpperCase() + value.substring(1, value.length - 1);
		},
		nl2br: function(value) {
			return value.replace(/(?:\r\n|\r|\n)/g, '<br>');
		},
		br2nl: function(value) {
			return value.replace(/(\<(br)(\/)?\>)/g, '\n');
		},
		copyToClipboard: function(str) {
			var el = doc.createElement('textarea');
			el.value = str;
			el.setAttribute('readonly', '');
			el.style.position = 'absolute';
			el.style.left = '-9999px';
			doc.body.appendChild(el);
			el.select();
			if (doc.execCommand('copy')) {
				doc.body.removeChild(el);
				return true;
			}
			return null;
		}
	}
	var _generator = {
		wordsCount: {max: 15, min: 5},
		WORDS: ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"],
		paragraphs: function(value) {
			var output = [];
			for (var i = 0; i < value; i++) {
				var nSentences = Math.round(Math.random() * (this.wordsCount.max - this.wordsCount.min) + this.wordsCount.min);
				output.push(this.sentences(nSentences));
			}
			return output.join('\n\n');
		},
		sentences: function(value) {
			var nWords = Math.round(Math.random() * (this.wordsCount.max - this.wordsCount.min) + this.wordsCount.min);
			var output = [];
			for(var i = 0; i < value; i++) {
				var tmpOutput = [];
				for(var j = 0; j < nWords; j++) {
					var w = this.WORDS[Math.floor(Math.random() * this.WORDS.length)];
					tmpOutput.push(0 === j ? _utils.capitalize(w) : w);
				}
				output.push(tmpOutput.join(' ') + '.');
			}
			return output.join(' ');
		}
	}
	return {
		utils: _utils,
		generator: _generator
	}
})(window.document);

var MainModule = (function(doc) {

		var init = function(config) {
			_addEventListeners(config);
		}

		var _addEventListeners = function(config) {
			return null;
		}

	return {
		init: init
	}
})(window.document).init(null);
