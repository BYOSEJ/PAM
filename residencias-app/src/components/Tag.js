import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';
export default function Tag({ children, tone = 'blue' }) {
  const palette = tone === 'green' ? { bg: '#E7F7F1', fg: '#16866E' } : tone === 'orange' ? { bg: '#FFF5E5', fg: '#B7791F' } : { bg: '#EDF3FF', fg: '#315EAE' };
  return <View style={[styles.tag, { backgroundColor: palette.bg }]}><Text style={[styles.text, { color: palette.fg }]}>{children}</Text></View>;
}
const styles = StyleSheet.create({ tag: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20, alignSelf: 'flex-start' }, text: { fontSize: 11, fontWeight: '700' } });
