# Wie funktioniert eigentlich das Themesystem?

Leicht erklärt: Du gibst in der [Settingskomponent](https://cara.software/cara-design/documentation/settings#Settingkomponent) deine gewünschten Themefarben ein und schon werden sie überall übernommen. Wenn du nun allerdings einer einzelnen Komponent eine bestimmte Farbe in dem jewaligen Theme einstellst, also eine Farbe die nur dann eingestellt wird, wenn das Theme aktiv ist, so wird diese übernommen und hat sogesehen "vorfahrt". Du kannst auch eigene Themes verwenden und gleiches Spiel geht dann wieder los.

## Errorhandling:

Wenn irgendwo ein Error auftritt, so wird ein Screen angezeigt der den jewaligen Error beschreibt und auch einen Link zu der Dokumentation bereitstellt. Ein Screen wird daher angezeigt, um UI Bugs schneller behandeln zu können. Wenn das Produkt nicht mehr in der Produktion ist, so wird dieser Screen ausgeschaltet, um Verwirrung bei dem Enduser hervorzubeugen.

## eigene Themes:

Es ist möglich auch eigene Colorthemes zu erstellen. Dafür muss man in der [Settingskomponent](https://cara.software/cara-design/documentation/settings#Settingkomponent) ein Object unter dem Prop 'addTheme' angeben. Danach wird in diesem Object ein Name, Farben und die Font eingestellt. Auch hier kann man wieder Themespezifisch anderen Komponenten jewalige besondere Farben geben.

## Automatisches einstellen von Themes nach den Einstellungen des Users:

Ebenfalls ist es auch möglich den vorgegebenen Colormode des Benutzers zu benutzen. 
### Für eine bessere Erklärung, so schaue dich doch bitte mal in unserer Documentation um: [Documentation](https://cara.software/cara-design/documentation/)