module.exports = {
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
  ],
  "rules": {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js"]
	}],
	"consistent-return": 0,
	"jsx-a11y/media-has-caption": 0,
  },
  "env": {
    "browser": true,
    "node": true
  }
}