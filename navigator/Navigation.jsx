import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./StackNavigator";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default Navigation;
