import { msg } from '@lit/localize';

const zoneA = msg('zone A');
const zoneB = msg('zone B');
const zoneC = msg('zone C');

export const ticketsData = [
	{
		type: msg('temporary ticket'),
		period: msg('90 min'),
		tickets: [
			{
				zone: zoneA,
				price: '50 rsd',
				text: 'A90'
			},
			{
				zone: zoneB,
				price: '50 rsd',
				text: 'B90'
			},
			{
				zone: zoneC,
				price: '100 rsd',
				text: 'C90'
			}
		]
	},
	{
		type: 'daily ticket',
		period: '1 day',
		tickets: [
			{
				zone: zoneA,
				price: '120 rsd',
				text: 'A1'
			},
			{
				zone: zoneB,
				price: '120 rsd',
				text: 'B1'
			},
			{
				zone: zoneC,
				price: '150 rsd',
				text: 'C1'
			}
		]
	},
	{
		type: 'weekly ticket',
		period: '7 days',
		tickets: [
			{
				zone: 'zone A',
				price: '800 rsd',
				text: 'A7'
			},
			{
				zone: zoneB,
				price: '800 rsd',
				text: 'B7'
			},
			{
				zone: zoneC,
				price: '1000 rsd',
				text: 'C7'
			}
		]
	},
	{
		type: 'monthly ticket',
		period: '30 days',
		tickets: [
			{
				zone: 'zone A',
				price: '2200 rsd',
				text: 'A30'
			},
			{
				zone: zoneB,
				price: '2200 rsd',
				text: 'B30'
			},
			{
				zone: zoneC,
				price: '3300 rsd',
				text: 'C30'
			}
		]
	}	
]