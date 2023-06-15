import { msg } from '@lit/localize';

const zoneA = msg(`zone A`);
const zoneB = msg(`zone B`);
const zoneC = msg(`zone C`);

export const ticketsData = [
	{
		type: msg('Temporary ticket'),
		period: msg('90 min'),
		tickets: [
			{
				zone: zoneA,
				price: `50`,
				text: 'A90'
			},
			{
				zone: zoneB,
				price: `50`,
				text: 'B90'
			},
			{
				zone: zoneC,
				price: `100`,
				text: 'C90'
			}
		]
	},
	{
		type: msg('Daily ticket'),
		period: msg('1 day'),
		tickets: [
			{
				zone: zoneA,
				price: `120`,
				text: 'A1'
			},
			{
				zone: zoneB,
				price: `120`,
				text: 'B1'
			},
			{
				zone: zoneC,
				price: `150`,
				text: 'C1'
			}
		]
	},
	{
		type: msg('Weekly ticket'),
		period: msg('7 days'),
		tickets: [
			{
				zone: 'zone A',
				price: `800`,
				text: 'A7'
			},
			{
				zone: zoneB,
				price: `800`,
				text: 'B7'
			},
			{
				zone: zoneC,
				price: `1000`,
				text: 'C7'
			}
		]
	},
	{
		type: msg('Monthly ticket'),
		period: msg('30 days'),
		tickets: [
			{
				zone: zoneA,
				price: `2200`,
				text: 'A30'
			},
			{
				zone: zoneB,
				price: `2200`,
				text: 'B30'
			},
			{
				zone: zoneC,
				price: `3300`,
				text: 'C30'
			}
		]
	}	
]