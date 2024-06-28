import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form() {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((peso / (altura * altura)).toFixed(2))
    }

    function validacaoImc() {
        Keyboard.dismiss()
        if (peso != null && altura != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("seu IMC é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>  Altura </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}> Peso </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    setPeso={setPeso}
                    value={peso}
                    placeholder="Ex. 75.650"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validacaoImc()}


                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}