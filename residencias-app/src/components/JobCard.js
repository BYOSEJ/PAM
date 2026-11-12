import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Tag from './Tag';
import { colors, shadow } from '../styles/theme';
export default function JobCard({ job, onPress }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.88 }]}>
    <View style={styles.top}><View style={styles.logo}><Text style={styles.logoText}>{job.empresa.split(' ').map(x => x[0]).slice(0,2).join('')}</Text></View><View style={{ flex: 1 }}><Text style={styles.company}>{job.empresa}</Text><Text style={styles.title}>{job.titulo}</Text></View><Text style={styles.arrow}>›</Text></View>
    <View style={styles.tags}><Tag tone={job.modalidad === 'Presencial' ? 'orange' : 'green'}>{job.modalidad}</Tag><Tag>{job.categoria}</Tag></View>
    <View style={styles.tech}>{job.tecnologias.map(t => <Text key={t} style={styles.techText}>{t}</Text>)}</View>
    <View style={styles.bottom}><Text style={styles.location}>⌖  {job.ubicacion}</Text><Text style={styles.duration}>{job.duracion}</Text></View>
  </Pressable>;
}
const styles = StyleSheet.create({ card: { backgroundColor: '#fff', borderRadius: 18, padding: 16, marginBottom: 13, borderWidth: 1, borderColor: '#EDF1F6', ...shadow }, top: { flexDirection: 'row', alignItems: 'center', gap: 11 }, logo: { width: 43, height: 43, borderRadius: 13, backgroundColor: '#EAF1FF', alignItems: 'center', justifyContent: 'center' }, logoText: { color: colors.blue, fontWeight: '800' }, company: { color: colors.muted, fontSize: 11, fontWeight: '600' }, title: { color: colors.text, fontSize: 14, fontWeight: '800', marginTop: 3, flexShrink: 1 }, arrow: { fontSize: 27, color: '#9AA8B8' }, tags: { flexDirection: 'row', gap: 7, marginTop: 13 }, tech: { flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginTop: 12 }, techText: { color: '#526276', backgroundColor: '#F4F6F9', paddingHorizontal: 9, paddingVertical: 5, borderRadius: 7, fontSize: 10, fontWeight: '600' }, bottom: { borderTopWidth: 1, borderTopColor: '#EEF1F5', marginTop: 13, paddingTop: 11, flexDirection: 'row', justifyContent: 'space-between' }, location: { color: colors.muted, fontSize: 11 }, duration: { color: colors.navy, fontSize: 11, fontWeight: '700' } });
