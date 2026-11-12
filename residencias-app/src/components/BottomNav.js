import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';
const items = [{ id: 'home', icon: '⌂', label: 'Inicio' }, { id: 'jobs', icon: '▤', label: 'Vacantes' }];
export default function BottomNav({ active, onChange }) {
  return <View style={styles.wrap}>{items.map(item => <Pressable key={item.id} onPress={() => onChange(item.id)} style={styles.item}>
    <Text style={[styles.icon, { color: active === item.id ? colors.blue : colors.muted }]}>{item.icon}</Text>
    <Text style={[styles.label, { color: active === item.id ? colors.blue : colors.muted }]}>{item.label}</Text>
  </Pressable>)}</View>;
}
const styles = StyleSheet.create({ wrap: { flexDirection: 'row', backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 10, paddingBottom: 18, justifyContent: 'space-around' }, item: { alignItems: 'center', gap: 3, minWidth: 90 }, icon: { fontSize: 22, fontWeight: '700' }, label: { fontSize: 11, fontWeight: '700' } });
