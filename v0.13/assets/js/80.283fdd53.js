(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{678:function(t,e,n){"use strict";n.r(e);var o=n(0),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"setting-up-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-environment"}},[t._v("#")]),t._v(" Setting Up Environment")]),t._v(" "),n("p",[t._v("You need an environment to run contracts. You can either run your node locally or connect to an\nexisting network. For easy testing, heldernet network is online, you can use it to deploy and run your\ncontracts. If you want to setup and run against a local blockchain, "),n("a",{attrs:{href:"#run-local-node-optional"}},[t._v("click\nhere")])]),t._v(" "),n("p",[t._v("To verify testnet is currently running, make sure the following URLs are all working for you:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://rpc.heldernet.cosmwasm.com/status",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rpc.heldernet.cosmwasm.com/status"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://faucet.heldernet.cosmwasm.com/status",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://faucet.heldernet.cosmwasm.com/status"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://lcd.heldernet.cosmwasm.com/node_info",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lcd.heldernet.cosmwasm.com/node_info"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("We have set up two native tokens - "),n("code",[t._v("STAKE")]),t._v(" ("),n("code",[t._v("ustake")]),t._v(") for becoming a validator and "),n("code",[t._v("COSM")]),t._v(" ("),n("code",[t._v("ucosm")]),t._v(") for\npaying fees.\nAvailable frontends:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://bigdipper.heldernet.cosmwasm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Big-dipper block explorer"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("You can use these to explore txs, addresses, validators and contracts\nfeel free to deploy one pointing to our rpc/lcd servers and we will list it.")]),t._v(" "),n("p",[t._v("You can find more information about other testnets:\n"),n("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm/testnets"),n("OutboundLink")],1),t._v(" and "),n("RouterLink",{attrs:{to:"/testnets/testnets.html"}},[t._v("Testnet\nsection")]),t._v(".")],1),t._v(" "),n("p",[t._v("When interacting with network, you can either use "),n("code",[t._v("wasmd")]),t._v(" which is a Go client or Node REPL. Altough Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with the Shell/Go client.")]),t._v(" "),n("h2",{attrs:{id:"setup-go-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-go-cli"}},[t._v("#")]),t._v(" Setup Go CLI")]),t._v(" "),n("p",[t._v("Let's configure "),n("code",[t._v("wasmd")]),t._v(" exec, point it to testnets, create wallet and ask tokens from faucet:")]),t._v(" "),n("p",[t._v("First source the heldernet network configurations to the shell:")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c291cmNlICZsdDsoY3VybCAtc1NMIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Db3NtV2FzbS90ZXN0bmV0cy9tYXN0ZXIvaGVsZGVybmV0L2RlZmF1bHRzLmVudikK"}}),t._v(" "),n("p",[t._v("Setup the client:")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBhZGQgd2FsbGV0cyBmb3IgdGVzdGluZwp3YXNtY2xpIGtleXMgYWRkIGZyZWQKJmd0Owp7CiAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7ZnJlZCZxdW90OywKICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDtsb2NhbCZxdW90OywKICAmcXVvdDthZGRyZXNzJnF1b3Q7OiAmcXVvdDt3YXNtMTNudDlyeGo3djJseTA5NmhtOHFzeWZqemc1cHI3dm41c2FxZDUwJnF1b3Q7LAogICZxdW90O3B1YmtleSZxdW90OzogJnF1b3Q7d2FzbXB1YjFhZGR3bnBlcHFmNG45YWZhZWZ1Z25menRnN3VkazUwZHV3cjRuOHA3cHdjamxtOXR1dW10bHV4NXZ1ZDZxdmZncDlnJnF1b3Q7LAogICZxdW90O21uZW1vbmljJnF1b3Q7OiAmcXVvdDtob2JieSBidW5rZXIgcm90YXRlIHBpYW5vIHNhdG9zaGkgcGxhbmV0IG5ldHdvcmsgdmVyaWZ5IGVsc2UgbWFya2V0IHNwcmluZyB0b3dhcmQgcGxlZGdlIHR1cmtleSB0aXAgc2xpbSB3b3JkIGphZ3VhciBjb25ncmVzcyB0aHVtYiBmbGFnIHByb2plY3QgY2hhbGsgaW5zcGlyZSZxdW90Owp9Cgp3YXNtY2xpIGtleXMgYWRkIGJvYgp3YXNtY2xpIGtleXMgYWRkIHRoaWVmCg=="}}),t._v(" "),n("p",[t._v("You need some tokens in your address to interact. If you are using local node you can skip this\nstep. Requesting tokens from faucet:")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"SlNPTj0kKGpxIC1uIC0tYXJnIGFkZHIgJCh3YXNtY2xpIGtleXMgc2hvdyAtYSBmcmVkKSAneyZxdW90O2Rlbm9tJnF1b3Q7OiZxdW90O3Vjb3NtJnF1b3Q7LCZxdW90O2FkZHJlc3MmcXVvdDs6JGFkZHJ9JykgJmFtcDsmYW1wOyBjdXJsIC1YIFBPU1QgLS1oZWFkZXIgJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IC0tZGF0YSAmcXVvdDskSlNPTiZxdW90OyBodHRwczovL2ZhdWNldC5oZWxkZXJuZXQuY29zbXdhc20uY29tL2NyZWRpdApKU09OPSQoanEgLW4gLS1hcmcgYWRkciAkKHdhc21jbGkga2V5cyBzaG93IC1hIHRoaWVmKSAneyZxdW90O2Rlbm9tJnF1b3Q7OiZxdW90O3Vjb3NtJnF1b3Q7LCZxdW90O2FkZHJlc3MmcXVvdDs6JGFkZHJ9JykgJmFtcDsmYW1wOyBjdXJsIC1YIFBPU1QgLS1oZWFkZXIgJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IC0tZGF0YSAmcXVvdDskSlNPTiZxdW90OyBodHRwczovL2ZhdWNldC5oZWxkZXJuZXQuY29zbXdhc20uY29tL2NyZWRpdAo="}}),t._v(" "),n("h2",{attrs:{id:"setup-node-repl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-node-repl"}},[t._v("#")]),t._v(" Setup Node REPL")]),t._v(" "),n("p",[t._v("Beyond the standard CLI tooling, we have also produced a flexible TypeScript library\n"),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmJS"),n("OutboundLink")],1),t._v(", which runs in Node.js as well as in modern browsers\nand handles queries and submitting transactions. Along with this library, we produced\n"),n("a",{attrs:{href:"https://www.npmjs.com/package/@cosmjs/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("@cosmjs/cli"),n("OutboundLink")],1),t._v(", which is a super-charged Node console. It\nsupports "),n("code",[t._v("await")]),t._v(", does type checking for helpful error messages, and preloads many CosmJS utilities.\nIf you are comfortable with the Node console, you will probably find this easier and more powerful\nthan the CLI tooling.")]),t._v(" "),n("p",[t._v("Full usage and installation "),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmjs/tree/master/packages/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions are on the\nREADME"),n("OutboundLink")],1),t._v(", also here are the source codes prepacked with\nnetwork configurations you can use on-the-fly:")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[t._v("The command below is obsolete and updated soon.")])]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyMgaGVsZGVybmV0Cm5weCBAY29zbWpzL2NsaUBeMC4yMiAtLWluaXQgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Nvc21XYXNtL3Rlc3RuZXRzL21hc3Rlci9oZWxkZXJuZXQvY2xpX2hlbHBlci50cwo="}}),t._v(" "),n("p",[t._v("Using the REPL:")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Ly8gQ3JlYXRlIG9yIGxvYWQgYWNjb3VudApjb25zdCBtbmVtb25pYyA9IGxvYWRPckNyZWF0ZU1uZW1vbmljKCdmcmVkLmtleScpCm1uZW1vbmljVG9BZGRyZXNzKG1uZW1vbmljKQoKY29uc3QgeyBhZGRyZXNzLCBjbGllbnQgfSA9IGF3YWl0IGNvbm5lY3QobW5lbW9uaWMsIHt9KQphZGRyZXNzCgpjbGllbnQuZ2V0QWNjb3VudCgpCi8vIGlmIGVtcHR5IC0gdGhpcyBvbmx5IHdvcmtzIHdpdGggQ29zbVdhc20KaGl0RmF1Y2V0KGRlZmF1bHRGYXVjZXRVcmwsIGFkZHJlc3MsICdDT1NNJykKY2xpZW50LmdldEFjY291bnQoKQo="}}),t._v(" "),n("h2",{attrs:{id:"run-local-node-optional"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-local-node-optional"}},[t._v("#")]),t._v(" Run Local Node (optional)")]),t._v(" "),n("p",[t._v("If you are interested in running your local network you can use the script below:")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBkZWZhdWx0IGhvbWUgaXMgfi8ud2FzbWQKIyBpZiB5b3Ugd2FudCB0byBzZXR1cCBtdWx0aXBsZSBhcHBzIG9uIHlvdXIgbG9jYWwgbWFrZSBzdXJlIHRvIGNoYW5nZSB0aGlzIHZhbHVlCkFQUF9IT01FPSZxdW90O34vLndhc21kJnF1b3Q7CkNMSV9IT01FPSZxdW90O34vLndhc21jbGkmcXVvdDsKUlBDPSZxdW90O2h0dHA6Ly9sb2NhbGhvc3Q6MjY2NTcmcXVvdDsKIyBpbml0aWFsaXplIHdhc21kIGNvbmZpZ3VyYXRpb24gZmlsZXMKd2FzbWQgaW5pdCBsb2NhbG5ldCAtLWNoYWluLWlkIGxvY2FsbmV0IC0taG9tZSAke0FQUF9IT01FfQoKIyBhZGQgbWluaW11bSBnYXMgcHJpY2VzIGNvbmZpZyB0byBhcHAgY29uZmlndXJhdGlvbiBmaWxlCnNlZCAtaSAtciAncy9taW5pbXVtLWdhcy1wcmljZXMgPSAmcXVvdDsmcXVvdDsvbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7MC4wMjV1Y29zbSZxdW90Oy8nICR7QVBQX0hPTUV9L2NvbmZpZy9hcHAudG9tbAoKIyBhZGQgeW91ciB3YWxsZXQgYWRkcmVzc2VzIHRvIGdlbmVzaXMKd2FzbWQgYWRkLWdlbmVzaXMtYWNjb3VudCAkKHdhc21jbGkga2V5cyBzaG93IC1hIGZyZWQpIDEwMDAwMDAwMDAwdWNvc20sMTAwMDAwMDAwMDBzdGFrZSAtLWhvbWUgJHtBUFBfSE9NRX0Kd2FzbWQgYWRkLWdlbmVzaXMtYWNjb3VudCAkKHdhc21jbGkga2V5cyBzaG93IC1hIHRoaWVmKSAxMDAwMDAwMDAwMHVjb3NtLDEwMDAwMDAwMDAwc3Rha2UgLS1ob21lICR7QVBQX0hPTUV9CgojIGFkZCBmcmVkJ3MgYWRkcmVzcyBhcyB2YWxpZGF0b3IncyBhZGRyZXNzCndhc21kIGdlbnR4IC0tbmFtZSBmcmVkIC0taG9tZSAke0FQUF9IT01FfQoKIyBjb2xsZWN0IGdlbnR4cyB0byBnZW5lc2lzCndhc21kIGNvbGxlY3QtZ2VudHhzIC0taG9tZSAke0FQUF9IT01FfQoKIyB2YWxpZGF0ZSB0aGUgZ2VuZXNpcyBmaWxlCndhc21kIHZhbGlkYXRlLWdlbmVzaXMgLS1ob21lICR7QVBQX0hPTUV9CgojIHJ1biB0aGUgbm9kZQp3YXNtZCBzdGFydCAtLWhvbWUgJHtBUFBfSE9NRX0K"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);