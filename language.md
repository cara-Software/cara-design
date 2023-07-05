## Wie funktioniert das Language System?:

In der Settingskomponent kann man einstellen, mehrere Sprachen zu verwenden mit dem **useMultipleLanguages** Prop. Nun kann man bei jeder Komponent mit einem Text seinen gewünschten Text in der jewaligen Sprachen mit einem neuen Prop angeben. Es ist ebenfalls möglich dann Glogal bei den Sprachen zu switchen, dank dem Sprachen-Namen Prop. Eine neue Sprache kann man mit dem Prop addLanguages angeben. Das sieht dann wie folgt aus: addLanguages={[{name: "derName", short: "dN"}, {name: "hey", short: "hy"}]}. Hier wurden jetzt zwei Sprachen angegeben.


## Eigene Sprachen verwenden

Man kann seine erstellten Sprachen verwenden, indem man in der **LanguageSettings**-Komponent einen Prop namen **language** einstellt, der automatisch, jenachdem auf welche Sprache der Webbrowser gestellt ist, eine angegebene Sprache verwendet. Ein Beispiel: sagt man, wenn der Browser auf Englisch gestellt ist, soll automatisch eine eigene Sprache verwendet werden, die man davor erstellt hat. So kann man aber auch sagen, wenn im Browser eine unbekannte Sprache eingestellt ist, so soll dann auch trotzdem Englisch verwendet werden mit dem Key: "other". Man gibt die gewünschte Sprache immer in dem Objekt an und dann sagt man das zu diesem Key ein String zugewiesen werden soll. Dieser String ist dann eine selber definierte Sprache.