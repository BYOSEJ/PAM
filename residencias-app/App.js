import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import DashboardScreen from './src/screens/DashboardScreen';
import JobsScreen from './src/screens/JobsScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';
import BottomNav from './src/components/BottomNav';
import { colors } from './src/styles/theme';
export default function App() {
  const [tab, setTab] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const openJob = job => { setSelectedJob(job); setApplied(false); };
  const backToJobs = () => { setSelectedJob(null); setTab('jobs'); };
  return <View style={styles.app}><ExpoStatusBar style="dark"/><View style={styles.topbar}><View style={styles.brandMark}><Text style={styles.brandIcon}>R</Text></View><Text style={styles.brand}>residencias<Text style={styles.brandAccent}>.connect</Text></Text><View style={styles.topRight}><Text style={styles.bell}>♧</Text><View style={styles.online}/></View></View>
    <View style={styles.main}>{selectedJob ? <JobDetailScreen job={selectedJob} onBack={backToJobs} applied={applied} onApply={()=>setApplied(true)}/> : tab==='home' ? <DashboardScreen onExplore={()=>setTab('jobs')}/> : <JobsScreen onSelect={openJob}/>}</View>
    {!selectedJob && <BottomNav active={tab} onChange={setTab}/>}
  </View>;
}
const styles=StyleSheet.create({app:{flex:1,backgroundColor:colors.background},topbar:{height:58,backgroundColor:'#fff',paddingHorizontal:20,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:colors.border,gap:9},brandMark:{width:29,height:29,borderRadius:9,backgroundColor:colors.blue,alignItems:'center',justifyContent:'center'},brandIcon:{fontSize:17,fontWeight:'900',color:'#fff'},brand:{fontSize:15,fontWeight:'900',color:colors.navy,letterSpacing:-.4},brandAccent:{color:colors.teal},topRight:{marginLeft:'auto',flexDirection:'row',alignItems:'center',gap:8},bell:{fontSize:20,color:colors.muted},online:{width:7,height:7,borderRadius:4,backgroundColor:colors.teal},main:{flex:1}});
