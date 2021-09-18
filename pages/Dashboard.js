import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import NewsArticle from '../components/NewsArticle';

function Dashboard({ navigation }) {

	const [newsArticles, setNewsArticle] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(data => {
				setNewsArticle(data);
			});
	});

	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.h1}>This is the Dashboard</Text>
			<View style={styles.newswrap}>
				<ScrollView>
					<Text>Total: {newsArticles.length}</Text>
					{
						newsArticles.map((article, index) => (
							<NewsArticle data={article} navigation={navigation} />
						))
					}
				</ScrollView>
			</View>
			{/*<Button onPress={() => navigation.navigate('Login')} title="Logout" />*/}
		</View>
	);
}

export default Dashboard;

const styles = {
	h1: {
		fontSize: 28,
	},
	newswrap: {
		flex: 1,
		flexDirection: 'column',
		margin: 8,
	}
}