/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
;

import { FragmentRefs } from "@graphitation/apollo-react-relay-duct-tape";
export type OrderDirection = "ASC" | "DESC";
export type OrderField = "IS_COMPLETED";
export type OrderByInput = {
    field: OrderField;
    direction: OrderDirection;
};
export type TodoListPaginationQueryVariables = {
    after: string;
    count: number;
    includeSomeOtherField?: boolean | null | undefined;
    orderBy?: OrderByInput | null | undefined;
};
export type TodoListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TodoList_queryFragment">;
};
export type TodoListPaginationQuery = {
    readonly response: TodoListPaginationQueryResponse;
    readonly variables: TodoListPaginationQueryVariables;
};


/*
query TodoListPaginationQuery($after: String! = "", $count: Int! = 5, $includeSomeOtherField: Boolean, $orderBy: OrderByInput) {
  ...TodoList_queryFragment_IBkyJ
}

fragment TodoList_queryFragment_IBkyJ on Query {
  todos(first: $count, after: $after, orderBy: $orderBy) @connection(key: "TodosList_todos", filter: ["orderBy"]) {
    edges {
      node {
        id
        isCompleted
        ...Todo_todoFragment
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    id
  }
}

fragment Todo_todoFragment on Todo {
  id
  description
  isCompleted
  someOtherField @include(if: $includeSomeOtherField)
}
*/

/*
query TodoListPaginationQuery($after: String! = "", $count: Int! = 5, $includeSomeOtherField: Boolean, $orderBy: OrderByInput) {
  ...TodoList_queryFragment_IBkyJ
  __fragments @client
}

fragment TodoList_queryFragment_IBkyJ on Query {
  todos(first: $count, after: $after, orderBy: $orderBy) @connection(key: "TodosList_todos", filter: ["orderBy"]) {
    edges {
      node {
        id
        isCompleted
        __typename
        ... on Node {
          __fragments @client
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    id
  }
}
*/

export const documents: import("relay-compiler-language-graphitation").CompiledArtefactModule = {
  "executionQueryDocument": {
    "kind": "Document",
    "definitions": [
      {
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {
          "kind": "Name",
          "value": "TodoListPaginationQuery"
        },
        "variableDefinitions": [
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "after"
              }
            },
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            },
            "defaultValue": {
              "kind": "StringValue",
              "value": "",
              "block": false
            }
          },
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "count"
              }
            },
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              }
            },
            "defaultValue": {
              "kind": "IntValue",
              "value": "5"
            }
          },
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "includeSomeOtherField"
              }
            },
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              }
            },
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OrderByInput"
              }
            }
          }
        ],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": {
                "kind": "Name",
                "value": "TodoList_queryFragment_IBkyJ"
              }
            }
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": {
          "kind": "Name",
          "value": "TodoList_queryFragment_IBkyJ"
        },
        "typeCondition": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Query"
          }
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "todos"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "first"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "count"
                    }
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "after"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "after"
                    }
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "orderBy"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "orderBy"
                    }
                  }
                }
              ],
              "directives": [
                {
                  "kind": "Directive",
                  "name": {
                    "kind": "Name",
                    "value": "connection"
                  },
                  "arguments": [
                    {
                      "kind": "Argument",
                      "name": {
                        "kind": "Name",
                        "value": "key"
                      },
                      "value": {
                        "kind": "StringValue",
                        "value": "TodosList_todos",
                        "block": false
                      }
                    },
                    {
                      "kind": "Argument",
                      "name": {
                        "kind": "Name",
                        "value": "filter"
                      },
                      "value": {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "orderBy",
                            "block": false
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "edges"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "node"
                          },
                          "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                              {
                                "kind": "Field",
                                "name": {
                                  "kind": "Name",
                                  "value": "id"
                                }
                              },
                              {
                                "kind": "Field",
                                "name": {
                                  "kind": "Name",
                                  "value": "isCompleted"
                                }
                              },
                              {
                                "kind": "FragmentSpread",
                                "name": {
                                  "kind": "Name",
                                  "value": "Todo_todoFragment"
                                }
                              },
                              {
                                "kind": "Field",
                                "name": {
                                  "kind": "Name",
                                  "value": "__typename"
                                }
                              }
                            ]
                          }
                        },
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "cursor"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "pageInfo"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "endCursor"
                          }
                        },
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "hasNextPage"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "id"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": {
          "kind": "Name",
          "value": "Todo_todoFragment"
        },
        "typeCondition": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Todo"
          }
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "id"
              }
            },
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "description"
              }
            },
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "isCompleted"
              }
            },
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "someOtherField"
              },
              "directives": [
                {
                  "kind": "Directive",
                  "name": {
                    "kind": "Name",
                    "value": "include"
                  },
                  "arguments": [
                    {
                      "kind": "Argument",
                      "name": {
                        "kind": "Name",
                        "value": "if"
                      },
                      "value": {
                        "kind": "Variable",
                        "name": {
                          "kind": "Name",
                          "value": "includeSomeOtherField"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  },
  "watchQueryDocument": {
    "kind": "Document",
    "definitions": [
      {
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {
          "kind": "Name",
          "value": "TodoListPaginationQuery"
        },
        "variableDefinitions": [
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "after"
              }
            },
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            },
            "defaultValue": {
              "kind": "StringValue",
              "value": "",
              "block": false
            }
          },
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "count"
              }
            },
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              }
            },
            "defaultValue": {
              "kind": "IntValue",
              "value": "5"
            }
          },
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "includeSomeOtherField"
              }
            },
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          {
            "kind": "VariableDefinition",
            "variable": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              }
            },
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OrderByInput"
              }
            }
          }
        ],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": {
                "kind": "Name",
                "value": "TodoList_queryFragment_IBkyJ"
              }
            },
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "__fragments"
              },
              "directives": [
                {
                  "kind": "Directive",
                  "name": {
                    "kind": "Name",
                    "value": "client"
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "kind": "FragmentDefinition",
        "name": {
          "kind": "Name",
          "value": "TodoList_queryFragment_IBkyJ"
        },
        "typeCondition": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Query"
          }
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [
            {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "todos"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "first"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "count"
                    }
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "after"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "after"
                    }
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "orderBy"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "orderBy"
                    }
                  }
                }
              ],
              "directives": [
                {
                  "kind": "Directive",
                  "name": {
                    "kind": "Name",
                    "value": "connection"
                  },
                  "arguments": [
                    {
                      "kind": "Argument",
                      "name": {
                        "kind": "Name",
                        "value": "key"
                      },
                      "value": {
                        "kind": "StringValue",
                        "value": "TodosList_todos",
                        "block": false
                      }
                    },
                    {
                      "kind": "Argument",
                      "name": {
                        "kind": "Name",
                        "value": "filter"
                      },
                      "value": {
                        "kind": "ListValue",
                        "values": [
                          {
                            "kind": "StringValue",
                            "value": "orderBy",
                            "block": false
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "edges"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "node"
                          },
                          "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                              {
                                "kind": "Field",
                                "name": {
                                  "kind": "Name",
                                  "value": "id"
                                }
                              },
                              {
                                "kind": "Field",
                                "name": {
                                  "kind": "Name",
                                  "value": "isCompleted"
                                }
                              },
                              {
                                "kind": "Field",
                                "name": {
                                  "kind": "Name",
                                  "value": "__typename"
                                }
                              },
                              {
                                "kind": "InlineFragment",
                                "typeCondition": {
                                  "kind": "NamedType",
                                  "name": {
                                    "kind": "Name",
                                    "value": "Node"
                                  }
                                },
                                "selectionSet": {
                                  "kind": "SelectionSet",
                                  "selections": [
                                    {
                                      "kind": "Field",
                                      "name": {
                                        "kind": "Name",
                                        "value": "__fragments"
                                      },
                                      "directives": [
                                        {
                                          "kind": "Directive",
                                          "name": {
                                            "kind": "Name",
                                            "value": "client"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "cursor"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "pageInfo"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "endCursor"
                          }
                        },
                        {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "hasNextPage"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "id"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  "metadata": {
    "mainFragment": {
      "name": "TodoList_queryFragment_IBkyJ",
      "typeCondition": "Query"
    },
    "connection": {
      "selectionPath": [
        "todos"
      ],
      "forwardCountVariable": "count",
      "forwardCursorVariable": "after"
    }
  }
};