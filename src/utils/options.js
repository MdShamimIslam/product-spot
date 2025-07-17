import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'product-spot') },
	{ name: 'style', title: __('Style', 'product-spot') }
];

export const purposeTypeOptions = [
	{ label: "Default", value: "default" },
	{ label: "Primary", value: "primary" }
];

export  const hotspots = [
	{ id: 1, x: 20, y: 30, title: "Active Noise Cancellation", description: "Industry-leading noise cancellation technology that blocks out unwanted ambient sound." },
	{ id: 2, x: 60, y: 25, title: "40mm Drivers", description: "Custom 40mm drivers deliver crisp highs and deep bass for immersive audio experience." },
	{ id: 3, x: 80, y: 40, title: "Touch Controls", description: "Intuitive touch controls for music playback, calls, and voice assistant activation." },
	{ id: 4, x: 25, y: 70, title: "30-Hour Battery", description: "Extended battery life ensures all-day listening with quick charge capability." }
  ];

