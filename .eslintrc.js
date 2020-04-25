module.exports = {
	"extends": [
		"airbnb",
		"airbnb/hooks",
		"plugin:react/recommended",
	],
	"rules": {
		"react/jsx-filename-extension": [1, {
			"extensions": [".js"]
		}]
	},
	"env": {
		"browser": true,
		"node": true
	}
}