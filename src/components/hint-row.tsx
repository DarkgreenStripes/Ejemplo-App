import type { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
  exemple?: string;
};

export function HintRow({ title = 'Try editing', hint = 'app/index.tsx', exemple = 'Exemple'}: HintRowProps) {
  return (
    <View style={styles.stepRow}>
      <ThemedText type="small">{title}</ThemedText>
      <ThemedView type="backgroundSelected" style={styles.codeSnippet}>
        <ThemedText themeColor="textSecondary">{hint}</ThemedText>
      </ThemedView>
      <ThemedText type="smallBold">{exemple}</ThemedText>
      <View>
        <ThemedText type="small">Texto de prueba</ThemedText>
        <Image
          source={require('../../assets/images/android-icon-foreground.png')}
          style={{ width: 50, height: 50 }}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeSnippet: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two,
  },
});
