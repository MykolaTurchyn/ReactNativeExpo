import {View, Text, StyleSheet, Pressable} from "react-native";

const Todo = ({item, onDelete, id}) => {
    return (
        <View style={styles.todoList}>
            <Pressable
                android_ripple={{color: 'silver'}}
                onPress={onDelete.bind(this, id)}
                style={({pressed}) => pressed && styles.pressed}
            >
                <Text style={styles.todoText}>{item}</Text>
            </Pressable>
        </View>
    );
};

export default Todo;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
    todoList: {
        marginTop: 8,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 10,
    },
    todoText: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        fontSize: 18,
        fontWeight: "bold",

    }
})
