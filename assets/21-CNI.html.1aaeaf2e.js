import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as a,c as t,a as n,b as e,e as l,d as s}from"./app.9ee045f7.js";const c={},v=l(`<h2 id="cni" tabindex="-1"><a class="header-anchor" href="#cni" aria-hidden="true">#</a> CNI</h2><p>CNI\u5B9A\u4E49\u4E86\u4E00\u5957\u5BB9\u5668\u7F51\u7EDC\u89C4\u8303\u3002\u6240\u4EE5\u5728\u5BB9\u5668\u548C\u5BB9\u5668\u7F51\u7EDC\u53EF\u4EE5\u5206\u522B\u7531\u4E0D\u540C\u7684\u4EBA\u53BB\u5F00\u53D1\uFF0C\u5BB9\u5668\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528CNI\u89C4\u8303\u53BB\u8C03\u7528\u5BF9\u5E94\u7684CNI\u63D2\u4EF6\uFF0C\u6216\u8005\u5BB9\u5668\u4E0D\u652F\u6301CNI\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5728\u4E0A\u5C42\u5199\u4E00\u5957\u7A0B\u5E8F\u624B\u52A8\u7BA1\u7406\u5BB9\u5668\u548C\u5BB9\u5668\u76F4\u63A5\u7684\u7F51\u7EDC\u3002</p><h2 id="\u8FD0\u884C\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65B9\u5F0F" aria-hidden="true">#</a> \u8FD0\u884C\u65B9\u5F0F</h2><p>CNI\u89C4\u8303\u4E86\u6807\u51C6\u7684\u8F93\u5165\uFF0C\u548C\u4E0D\u540C\u7248\u672C\u7684\u6807\u51C6\u8F93\u51FA\uFF0C\u6765\u548C\u63D2\u4EF6\u8FDB\u884C\u4EA4\u4E92\u3002CNI\u4E5F\u6709\u4E0D\u540C\u7684\u7248\u672C\uFF0C\u7136\u540E\u89C4\u5B9A\u4E86\u4E0D\u540C\u7248\u672C\u7684\u8F93\u51FA\u3002\u7136\u540E\u5BF9\u5E94\u7684\u63D2\u4EF6\u5C31\u53BB\u5B9E\u73B0\u8FD9\u4E2A\u89C4\u8303\u5C31\u884C\u3002</p><h3 id="cnitool" tabindex="-1"><a class="header-anchor" href="#cnitool" aria-hidden="true">#</a> cnitool</h3><p><code>cnitool</code>\u5C31\u662F\u6A21\u62DF\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u7136\u540E\u901A\u8FC7\u914D\u7F6E\u6765\u8C03\u7528\u4E0D\u540C\u63D2\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u901A\u8FC7cnitool\u5BA2\u6237\u7AEF\u8C03\u7528\uFF0C\u53EA\u662F\u5C01\u88C5\u4E86\u4E00\u5C42\u8C03\u7528\uFF0C\u81EA\u52A8\u627E\u914D\u7F6E\u6587\u4EF6\u3002\u53EF\u4EE5\u8C03\u7528\u4EFB\u610F\u63D2\u4EF6
NETCONFPATH=./conf CNI_PATH=./bin cnitool add my-logger /var/run/netns/testing

Command: ADD
Container Id: cnitool-77383ca0a0715733ca6f
Path to Network Namespace: /var/run/netns/testing
Network Interface: eth0
Path to CNI Plugins: ./bin
Network Configuration:
{
    &quot;cniVersion&quot;: &quot;0.4.0&quot;,
    &quot;dns&quot;: {}
}

# NETCONFPATH \u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55
# CNI_PATH CNI\u63D2\u4EF6\u76EE\u5F55\uFF0C\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684type\u6765\u627E\u5BF9\u5E94\u7684\u53EF\u6267\u884C\u63D2\u4EF6
# ADD/DEL/CHECK/VERSION \u5206\u522B\u662F\u901A\u77E5\u63D2\u4EF6\u6765\u505A\u5BF9\u5E94\u7684\u4E8B\u60C5\uFF0C\u8FD9\u4E2A\u7531\u63D2\u4EF6\u6765\u5B9E\u73B0
# /var/run/netns/testing namespace


2. \u76F4\u63A5\u8C03\u7528\u5355\u4E2A\u63D2\u4EF6

CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/testing CNI_IFNAME=eth0 CNI_PATH=./bin ./cni &lt;./conf/my-cni.conf

\u6216\u8005\u901A\u8FC7\u547D\u4EE4\u884C\u6765\u624B\u52A8\u8F93\u5165\u914D\u7F6E\uFF0C\u6CE8\u610F\u8F93\u5165\u5B8C\u4E4B\u540E\uFF0C\u9700\u8981\u53D1\u51FA\u4E00\u4E2A\u7ED3\u675F\u4FE1\u53F7EOF\u3002Linux \u4F7F\u7528control+D\uFF0C\u5426\u5219\u4E00\u76F4\u5728ReadAll
CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/testing CNI_IFNAME=eth0 CNI_PATH=./bin ./cni

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u53D1cni\u63D2\u4EF6\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1cni\u63D2\u4EF6\u6D41\u7A0B" aria-hidden="true">#</a> \u5F00\u53D1CNI\u63D2\u4EF6\u6D41\u7A0B</h2><ol><li>\u4E0B\u8F7D\u7B2C\u4E09\u65B9\u5E93\uFF08\u5C01\u88C5\u597D\u83B7\u53D6\u6807\u51C6\u8F93\u5165\uFF0C\u8F93\u51FA\uFF0C\u7B49\u57FA\u672C\u7EDF\u4E00\u64CD\u4F5C\uFF0C\u63D0\u4F9B\u5BF9\u5E94\u7684\u63A5\u53E3\uFF0C\u81EA\u5DF1\u5B9E\u73B0\u63D2\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
go get github.com/containernetworking/cni

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u901A\u8FC7\u5E93\u7F16\u5199\u5B9E\u73B0\u4E1A\u52A1</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

package main

import (
	&quot;encoding/json&quot;
	&quot;fmt&quot;
	&quot;github.com/containernetworking/cni/pkg/skel&quot;
	&quot;github.com/containernetworking/cni/pkg/types&quot;
	current &quot;github.com/containernetworking/cni/pkg/types/100&quot;
	&quot;github.com/containernetworking/cni/pkg/version&quot;
	&quot;os&quot;
)

// \u901A\u8FC7stderr\u8F93\u51FA
func print(str string) {
	fmt.Fprintf(os.Stderr, str)
}

func main() {
    // version \u8FD9\u4E2A\u5E93\u81EA\u52A8\u5E2E\u5B9E\u73B0\u4E86
	skel.PluginMain(cmdAdd, cmdCheck, cmdDel, version.All, &quot;hello&quot;)
}

// \u8C03\u7528ADD\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u81EA\u5DF1\u6765
func cmdAdd(args *skel.CmdArgs) error {
	// \u65E5\u5FD7\u8F93\u51FA
	print(&quot;cmd add inter&quot;)

	// \u83B7\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u5BA2\u6237\u7AEF\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u4F1A\u5C06\u914D\u7F6E\u6587\u4EF6\u901A\u8FC7stdin\u8F93\u5165\u8FDB\u6765\u3002
	config := &amp;types.NetConf{}
	err := json.Unmarshal(args.StdinData, config)
	if err != nil {
		return err
	}

	ret := current.Result{
		CNIVersion: config.CNIVersion,
	}
	// \u8FD4\u56DE\u7ED3\u679C\uFF0C\u5176\u5B9E\u8FD9\u91CC\u5C31\u662F\u901A\u8FC7stdout\u8F93\u51FA\uFF0C\u4E0D\u540C\u7684CNI\u7248\u672C\u6709\u4E0D\u540C\u7684\u8F93\u51FA
	return ret.Print()
}

func cmdCheck(args *skel.CmdArgs) error {
	return nil
}

func cmdDel(args *skel.CmdArgs) error {
	return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4F7F\u7528\u7B2C\u4E09\u65B9\u7F51\u7EDC\u5E93\u6765\u5B9E\u73B0</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5728\u7F16\u5199\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5F88\u591A\u7F51\u7EDC\u914D\u7F6E\uFF0C\u8BBE\u7F6E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u4F7F\u7528\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5C01\u88C5\u597D\u7684\u5E93\u3002

# \u5404\u79CD\u63D2\u4EF6\u7684\u4E00\u4E9B\u5B9E\u73B0
github.com/containernetworking/plugins


# ioctl (ifconfig)


# netlink (ip \u547D\u4EE4) 
github.com/vishvananda/netlink

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u624B\u52A8\u8C03\u7528cni\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u8C03\u7528cni\u63D2\u4EF6" aria-hidden="true">#</a> \u624B\u52A8\u8C03\u7528CNI\u63D2\u4EF6</h2>`,15),u={href:"https://www.cni.dev/docs/",target:"_blank",rel:"noopener noreferrer"},o=s("\u89C4\u8303\u53C2\u8003"),m=l(`<ol><li>CNI\u89C4\u8303\u662F\u7ED9namespace\u914D\u7F6E\u7F51\u7EDC\u7684</li><li>\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u4E0D\u540C\u7684namespace\uFF0C\u6765\u6A21\u62DF\u3002\u56E0\u4E3A\u5BB9\u5668\u6700\u7EC8\u8FD0\u884C\u4E5F\u662F\u4E0D\u540C\u7684namespace\uFF0C\u6700\u7EC8\u7ED9namespace\u914D\u7F6E\u7F51\u7EDC</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u4E0B\u8F7DCNI\u63D2\u4EF6
2. \u914D\u7F6ECNI
3. \u8FD0\u884C\u63D2\u4EF6


{
    &quot;name&quot;:&quot;lab-br0&quot;,
    &quot;type&quot;:&quot;bridge&quot;,
    &quot;bridge&quot;:&quot;lab-br0&quot;,
    &quot;isGateway&quot;:true,
    &quot;ipMasq&quot;:true,
    &quot;ipam&quot;:{
        &quot;type&quot;:&quot;host-local&quot;,
        &quot;subnet&quot;:&quot;10.15.10.0/24&quot;
    },
    &quot;routes&quot;:[
        {
            &quot;dst&quot;:&quot;0.0.0.0/0&quot;
        }
    ],
    &quot;rangeStart&quot;:&quot;10.15.10.100&quot;,
    &quot;rangeEnd&quot;:&quot;10.15.10.200&quot;,
    &quot;gateway&quot;:&quot;10.15.10.99&quot;
}

CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/lab-ns CNI_IFNAME=eth0 CNI_PATH=\`pwd\` ./bridge &lt;../conf/lab-br0.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#k8s\u7F51\u7EDC" aria-hidden="true">#</a> k8s\u7F51\u7EDC</h2><ol><li>\u521B\u5EFA\u5BB9\u5668</li><li>kubelet\u901A\u8FC7CNI\u914D\u7F6Epause\u7F51\u7EDC</li><li>POD\u52A0\u5165pause namespace</li></ol><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),b={href:"https://morningspace.github.io/tech/k8s-net-cni/",target:"_blank",rel:"noopener noreferrer"},h=s("\u53C2\u8003\u8D44\u6599"),g={href:"https://www.cni.dev/docs/",target:"_blank",rel:"noopener noreferrer"},N=s("\u89C4\u8303\u53C2\u8003"),q={href:"https://github.com/containernetworking/cni",target:"_blank",rel:"noopener noreferrer"},p=s("CNI");function C(_,I){const i=r("ExternalLinkIcon");return a(),t("div",null,[v,n("p",null,[n("a",u,[o,e(i)])]),m,n("ul",null,[n("li",null,[n("a",b,[h,e(i)])]),n("li",null,[n("a",g,[N,e(i)])]),n("li",null,[n("a",q,[p,e(i)])])])])}var x=d(c,[["render",C],["__file","21-CNI.html.vue"]]);export{x as default};
