import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

const Input = ({addTodoHandler, isVisibleModal, onCancel}) => {
    const [text, setText] = useState('');
    const todosInputHandler = (enteredText) => {
            setText(enteredText);
    }
    const onAddHandleInput = () => {
        addTodoHandler(text);
        setText('');
    }
    return (
        <Modal visible={isVisibleModal}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../../assets/images/notepad.png')}/>

                <TextInput
                    style={styles.input}
                    placeholder={'write todo'}
                    onChangeText={todosInputHandler}
                    value={text}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonItem}>
                        <Button color={'gold'} title={'Add TODO'} onPress={onAddHandleInput}/>
                    </View>
                    <View style={styles.buttonItem}>
                        <Button color={'gold'}  title={'Cancel'} onPress={onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Input;
const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        padding: 16,
        color: 'red'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonItem: {
        width: '30%',
        margin: 8,
        marginRight: 20,
        // borderRadius: 16,
        // borderColor: 'gold',
        // borderWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
        margin: 30
    },
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 20,
        alignItems: "center",
        padding: 16,
        // backgroundColor: 'purple'

    },
})
