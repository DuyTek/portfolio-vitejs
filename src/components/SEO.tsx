import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string;
	canonical?: string;
}

const defaultSEO = {
	title: 'Duy Nguyen - Software Developer Portfolio',
	description:
		'Dedicated Software Developer at a multi-national corp pursuing a career as a Developer. Specializing in React, TypeScript, Java, and full-stack development.',
	keywords:
		'Duy Nguyen, Software Developer, React, TypeScript, Java, Full-stack Developer, Portfolio, Web Development, Programming',
	ogImage: '/og-image.jpg',
};

export default function SEO({
	title,
	description,
	keywords,
	ogImage,
	canonical,
}: SEOProps) {
	const location = useLocation();

	const currentUrl = `${window.location.origin}${location.pathname}`;
	const pageTitle = title ? `${title} | Duy Nguyen` : defaultSEO.title;
	const pageDescription = description || defaultSEO.description;
	const pageKeywords = keywords || defaultSEO.keywords;
	const pageOgImage = ogImage || defaultSEO.ogImage;
	const pageCanonical = canonical || currentUrl;

	useEffect(() => {
		// Update document title
		document.title = pageTitle;

		// Update meta tags
		updateMetaTag('name', 'description', pageDescription);
		updateMetaTag('name', 'keywords', pageKeywords);
		updateMetaTag('property', 'og:title', pageTitle);
		updateMetaTag('property', 'og:description', pageDescription);
		updateMetaTag('property', 'og:url', currentUrl);
		updateMetaTag(
			'property',
			'og:image',
			`${window.location.origin}${pageOgImage}`
		);
		updateMetaTag('property', 'twitter:title', pageTitle);
		updateMetaTag('property', 'twitter:description', pageDescription);
		updateMetaTag('property', 'twitter:url', currentUrl);
		updateMetaTag(
			'property',
			'twitter:image',
			`${window.location.origin}${pageOgImage}`
		);

		// Update canonical link
		updateCanonicalLink(pageCanonical);

		// Update JSON-LD structured data based on page
		updateStructuredData(location.pathname);
	}, [
		pageTitle,
		pageDescription,
		pageKeywords,
		pageOgImage,
		pageCanonical,
		currentUrl,
		location.pathname,
	]);

	return null; // This component doesn't render anything
}

function updateMetaTag(attribute: string, value: string, content: string) {
	let element = document.querySelector(`meta[${attribute}="${value}"]`);
	if (element) {
		element.setAttribute('content', content);
	} else {
		element = document.createElement('meta');
		element.setAttribute(attribute, value);
		element.setAttribute('content', content);
		document.head.appendChild(element);
	}
}

function updateCanonicalLink(url: string) {
	let element = document.querySelector('link[rel="canonical"]');
	if (element) {
		element.setAttribute('href', url);
	} else {
		element = document.createElement('link');
		element.setAttribute('rel', 'canonical');
		element.setAttribute('href', url);
		document.head.appendChild(element);
	}
}

function updateStructuredData(pathname: string) {
	// Remove existing structured data
	const existingScript = document.querySelector(
		'script[type="application/ld+json"]'
	);
	if (existingScript && existingScript.id === 'dynamic-structured-data') {
		existingScript.remove();
	}

	let structuredData;

	switch (pathname) {
		case '/':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'Person',
				name: 'Duy Nguyen',
				jobTitle: 'Software Developer',
				description:
					'Dedicated Software Developer at a multi-national corp pursuing a career as a Developer.',
				url: window.location.origin,
				sameAs: ['https://github.com/DuyTek'],
				worksFor: {
					'@type': 'Organization',
					name: 'Katalon',
				},
				knowsAbout: [
					'React',
					'TypeScript',
					'Java',
					'JavaScript',
					'Full-stack Development',
					'Web Development',
					'Software Engineering',
				],
			};
			break;
		case '/projects':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'ItemList',
				name: "Duy Nguyen's Projects",
				description:
					'A collection of software development projects by Duy Nguyen',
				itemListElement: [
					{
						'@type': 'SoftwareApplication',
						name: 'PowerAI - An AI-Powered Testing Assistant',
						description:
							'An AI-powered testing assistant that integrates with browsers to boost the speed and quality of automation scripts for web application testing.',
						applicationCategory: 'DeveloperApplication',
						operatingSystem: 'Web Browser',
					},
				],
			};
			break;
		case '/experience':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'Person',
				name: 'Duy Nguyen',
				hasOccupation: [
					{
						'@type': 'Occupation',
						name: 'Software Engineer',
						occupationLocation: {
							'@type': 'Organization',
							name: 'Katalon',
						},
						skills: [
							'React',
							'TypeScript',
							'Java',
							'JavaScript',
							'Software Testing',
							'Automation',
						],
					},
				],
			};
			break;
		case '/skills':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'Person',
				name: 'Duy Nguyen',
				knowsAbout: [
					'Java',
					'JavaScript',
					'TypeScript',
					'React.js',
					'Kotlin',
					'PostgreSQL',
					'MySQL',
					'git',
					'GitHub',
					'Vitest',
					'Jest',
					'GitHub Actions',
					'Figma',
					'Agile',
				],
			};
			break;
		default:
			return; // Don't add structured data for unknown pages
	}

	if (structuredData) {
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.id = 'dynamic-structured-data';
		script.textContent = JSON.stringify(structuredData);
		document.head.appendChild(script);
	}
}
