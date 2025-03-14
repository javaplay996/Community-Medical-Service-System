const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"用户管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"用户管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医生管理",
                        "menuJump":"列表",
                        "tableName":"yisheng"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"医生评价管理",
                        "menuJump":"列表",
                        "tableName":"yishengCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"医生收藏管理",
                        "menuJump":"列表",
                        "tableName":"yishengCollection"
                    }
                ],
                "menu":"医生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "报表",
                            "删除"
                        ],
                        "menu":"挂号管理",
                        "menuJump":"列表",
                        "tableName":"yishengYuyue"
                    }
                ],
                "menu":"挂号管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"防范指南管理",
                        "menuJump":"列表",
                        "tableName":"zhinan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"指南留言管理",
                        "menuJump":"列表",
                        "tableName":"zhinanLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"指南收藏管理",
                        "menuJump":"列表",
                        "tableName":"zhinanCollection"
                    }
                ],
                "menu":"防范指南管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"挂号时间段管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryTime"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"科室管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryYisheng"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"指南类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryZhinan"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"职位管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryZhiwei"
			        }
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"留言板管理",
			            "menuJump":"列表",
			            "tableName":"liuyan"
			        }
			    ],
			    "menu":"留言板管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"社区公告管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"社区公告管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"医生评价管理",
	                    "menuJump":"列表",
	                    "tableName":"yishengCommentback"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"医生收藏管理",
	                    "menuJump":"列表",
	                    "tableName":"yishengCollection"
	                }
	            ],
	            "menu":"医生管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"用户咨询管理",
	                    "menuJump":"列表",
	                    "tableName":"yishengChat"
	                }
	            ],
	            "menu":"用户咨询管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "订单"
	                    ],
	                    "menu":"挂号管理",
	                    "menuJump":"列表",
	                    "tableName":"yishengYuyue"
	                }
	            ],
	            "menu":"挂号管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"防范指南管理",
	                    "menuJump":"列表",
	                    "tableName":"zhinan"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"指南留言管理",
	                    "menuJump":"列表",
	                    "tableName":"zhinanLiuyan"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"指南收藏管理",
	                    "menuJump":"列表",
	                    "tableName":"zhinanCollection"
	                }
	            ],
	            "menu":"防范指南管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"社区公告管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"社区公告管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"医生",
	    "tableName":"yisheng"
	}
]
    }
}
export default menu;
