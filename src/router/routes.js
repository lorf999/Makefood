import routesComponent from './routesComponent.js'

export default [
//	{
//		path: '/test',
//		name: 'Test',
//		component:routesComponent.Test
//	},

	{
		path: '/history',
		name: 'History',
		component:routesComponent.History
	},
	{
		path: '/register',
		name: 'Register',
		component:routesComponent.Register
	},
	{
		path: '/search',
		name: 'Search',
		component:routesComponent.Search
	},
	{
		path: '/main',
		name: 'Main',
		component:routesComponent.Main,
		
		children:[
			{
				path: '/index',
				name: 'Index',
				component:routesComponent.Index
			},
			{
				path: '/my',
				name: 'My',
				component:routesComponent.My
			},
			{
				path: '/collect',
				name: 'Collect',
				component:routesComponent.Collect
			},
			
//			{
//				path: '*',
//				redirect: {name: 'Index'}
//			},
		
		]
		
	},
	{
		path: '/detail/:pid',
		name: 'Detail',
		component:routesComponent.Detail
	},
	{
		path: '/fen/:pid',
		name: 'Fen',
		component:routesComponent.Fen
	},
	{
		path: '/recommend/:pid',
		name: 'Recommend',
		component:routesComponent.Recommend
	},
	
	{
//		如果路徑為空,則就是一開始要顯示的頁面
		path:'/zhuche',
		name:'Zhuche',
		component:routesComponent.Zhuche
	},
	{
//		如果路徑為空,則就是一開始要顯示的頁面
		path:'/',
		name:'Denglu',
		component:routesComponent.Denglu
	},
]
