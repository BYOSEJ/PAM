import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable } from 'react-native';
import { colors } from '../styles/theme';
import { vacantes } from '../data/vacantes';
import JobCard from '../components/JobCard';
export default function JobsScreen({ onSelect }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Todas');
  const filters = ['Todas','Presencial','Híbrido','Remoto'];
  const filtered = useMemo(() => vacantes.filter(j => (filter === 'Todas' || j.modalidad === filter) && `${j.titulo} ${j.empresa} ${j.tecnologias.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [query,filter]);
  return <View style={styles.screen}><ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
    <Text style={styles.eyebrow}>OPORTUNIDADES PARA TI</Text><Text style={styles.title}>Explora vacantes</Text><Text style={styles.subtitle}>Encuentra un proyecto alineado con tus habilidades e intereses.</Text>
    <View style={styles.search}><Text style={styles.searchIcon}>⌕</Text><TextInput value={query} onChangeText={setQuery} placeholder="Buscar proyecto o tecnología..." placeholderTextColor="#9AA6B5" style={styles.input}/><Text style={styles.filterIcon}>☷</Text></View>
    <View style={styles.filterRow}>{filters.map(f => <Pressable key={f} onPress={() => setFilter(f)} style={[styles.filter,{backgroundColor:filter===f?colors.navy:'#fff',borderColor:filter===f?colors.navy:colors.border}]}><Text style={[styles.filterText,{color:filter===f?'#fff':colors.muted}]}>{f}</Text></Pressable>)}</View>
    <View style={styles.results}><Text style={styles.resultCount}>{filtered.length} oportunidades</Text><Text style={styles.sort}>Más recientes ↓</Text></View>
    {filtered.map(job => <JobCard key={job.id} job={job} onPress={() => onSelect(job)}/>)}
    {filtered.length===0 && <View style={styles.empty}><Text style={styles.emptyTitle}>No encontramos resultados</Text><Text style={styles.subtitle}>Prueba con otra búsqueda o filtro.</Text></View>}
  </ScrollView></View>;
}
const styles=StyleSheet.create({screen:{flex:1,backgroundColor:colors.background},content:{padding:20,paddingBottom:28},eyebrow:{fontSize:9,letterSpacing:1.4,color:colors.teal,fontWeight:'800'},title:{fontSize:25,fontWeight:'900',color:colors.navy,marginTop:5},subtitle:{fontSize:11,color:colors.muted,lineHeight:17,marginTop:5,marginBottom:17},search:{height:48,backgroundColor:'#fff',borderRadius:13,borderWidth:1,borderColor:colors.border,flexDirection:'row',alignItems:'center',paddingHorizontal:13,gap:9},searchIcon:{fontSize:22,color:colors.muted},input:{flex:1,fontSize:11,color:colors.text},filterIcon:{fontSize:18,color:colors.blue},filterRow:{flexDirection:'row',gap:7,marginTop:13,marginBottom:18},filter:{paddingHorizontal:12,paddingVertical:8,borderRadius:20,borderWidth:1},filterText:{fontSize:10,fontWeight:'700'},results:{flexDirection:'row',justifyContent:'space-between',marginBottom:11},resultCount:{fontSize:11,color:colors.navy,fontWeight:'800'},sort:{fontSize:10,color:colors.muted},empty:{alignItems:'center',padding:35,backgroundColor:'#fff',borderRadius:15},emptyTitle:{fontSize:14,color:colors.navy,fontWeight:'800',marginBottom:5}});
