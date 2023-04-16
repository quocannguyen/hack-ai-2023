import {ModelTypes} from "../utils/ModelTypes";
import {useEffect, useState} from "react";
import {Bach, Pachebel} from "../utils/SongLibrary";
import {getChordSuggestions, getModel} from "../utils/Model";

export function ChordSuggester() {
    const modelType = ModelTypes.FromNormalisedData
    const [model, setModel] = useState();
    const [chords,setChords] = useState([]);
    const [chordSuggestions, setChordSuggestions] = useState([]);
    function addChord(chord) {
        setChords(previousChords => [...previousChords, chord])
    }
    function chooseSuggestion(suggestion) {
        addChord(suggestion.chord)
    }

    useEffect(() => {
        if(!model) return;
        const suggestions = getChordSuggestions(model, chords, modelType.mustNormalise);
        setChordSuggestions(suggestions);
    }, [model, chords, modelType]);

    if (!model) {
        getModel(modelType.modelPath, modelType.weightPath).then(loadedModel => {
            setModel(loadedModel)
        })
    }

    return (
        <div>
            <p>Chords</p>
            <ul>
                {chords.map(chord => {
                    return <li>{chord.name}</li>
                })}
            </ul>
            <p>Chord Suggestions</p>
            <ul>
                {chordSuggestions.map(suggestion => {
                    function onClick() {
                        console.log(suggestion)
                        console.log(chords)
                        chooseSuggestion(suggestion)
                    }
                    return (
                        <li>{suggestion.name} <button onClick={onClick}></button></li>
                    )
                })}
            </ul>
        </div>
    )
}