import { useEffect, useRef, type ReactNode } from 'react';
import {
  Animated,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

interface FadeInViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView: React.FC<FadeInViewProps> = ({ children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...(style as object),
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
