import { Pressable } from "react-native";
import { Ionicons } from '@react-native-vector-icons/ionicons';

function IconButton({ icon, color, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
}

export default IconButton;