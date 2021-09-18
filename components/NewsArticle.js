import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';

const NewsArticle = (props) => {

	const showSingleArticle = () => {
		// props.navigation.navigate('SingleArticle', props.data);
	}

	return (
		<TouchableOpacity onPress={showSingleArticle} style={styles.articleWrap}>
			<Text style={styles.title}>{props.data.title}</Text>
			<Text style={styles.body}>{props.data.body}</Text>
		</TouchableOpacity>
	);
}

export default NewsArticle;

const styles = {
	articleWrap: {
		borderWidth: 1,
		borderColor: '#000',
		padding: 8
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	body: {
		fontSize: 14,
	}
}