import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.75979bb7.js";const a={},o=s(`<p>\u4F7F\u7528protoc\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u6709\u5F88\u591A\u53C2\u6570\uFF0C\u63A5\u4E0B\u6765\u5177\u4F53\u4ECB\u7ECD\u4E0B\u53C2\u6570\u7684\u4F5C\u7528\u4EE5\u53CA\u4F7F\u7528\u573A\u666F</p><h2 id="\u547D\u4EE4\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u5E2E\u52A9" aria-hidden="true">#</a> \u547D\u4EE4\u5E2E\u52A9</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: protoc [OPTION] PROTO_FILES
Parse PROTO_FILES and generate output based on the options given:
  -IPATH, --proto_path=PATH   \u6307\u5B9Aprotoc\u5B9A\u4E49\u7684\u6E90\u6587\u4EF6\u76EE\u5F55\u4F4D\u7F6E\uFF0C\u4F1A\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u8FDB\u884C\u67E5\u627E\uFF0C\u4E5F\u5C31\u662Fprotobuf\u6839\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\uFF0C\u7279\u522B\u5BF9\u4E8Eimport\u7684\u65F6\u5019\uFF0C\u4F1A\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u5F00\u59CB\u67E5\u627E\u3002\u53EF\u4EE5\u591A\u4E2A\u53C2\u6570\u6307\u5B9A\u591A\u4E2A\uFF0C\u6216\u8005\u4E00\u4E2A\u53C2\u6570\u540E\u9762\u52A0:\u6307\u5B9A\u591A\u4E2A\u8DEF\u5F84
  --encode=MESSAGE_TYPE       Read a text-format message of the given type
                              from standard input and write it in binary
                              to standard output.  The message type must
                              be defined in PROTO_FILES or their imports.
  --deterministic_output      When using --encode, ensure map fields are
                              deterministically ordered. Note that this order
                              is not canonical, and changes across builds or
                              releases of protoc.
  --decode=MESSAGE_TYPE       Read a binary message of the given type from
                              standard input and write it in text format
                              to standard output.  The message type must
                              be defined in PROTO_FILES or their imports.
  --decode_raw                Read an arbitrary protocol message from
                              standard input and write the raw tag/value
                              pairs in text format to standard output.  No
                              PROTO_FILES should be given when using this
                              flag.
  --descriptor_set_in=FILES   Specifies a delimited list of FILES
                              each containing a FileDescriptorSet (a
                              protocol buffer defined in descriptor.proto).
                              The FileDescriptor for each of the PROTO_FILES
                              provided will be loaded from these
                              FileDescriptorSets. If a FileDescriptor
                              appears multiple times, the first occurrence
                              will be used.
  -oFILE,                     Writes a FileDescriptorSet (a protocol buffer,
    --descriptor_set_out=FILE defined in descriptor.proto) containing all of
                              the input files to FILE.
  --include_imports           When using --descriptor_set_out, also include
                              all dependencies of the input files in the
                              set, so that the set is self-contained.
  --include_source_info       When using --descriptor_set_out, do not strip
                              SourceCodeInfo from the FileDescriptorProto.
                              This results in vastly larger descriptors that
                              include information about the original
                              location of each decl in the source file as
                              well as surrounding comments.
  --dependency_out=FILE       Write a dependency output file in the format
                              expected by make. This writes the transitive
                              set of input file paths to FILE
  --error_format=FORMAT       Set the format in which to print errors.
                              FORMAT may be &#39;gcc&#39; (the default) or &#39;msvs&#39;
                              (Microsoft Visual Studio format).
  --fatal_warnings            Make warnings be fatal (similar to -Werr in
                              gcc). This flag will make protoc return
                              with a non-zero exit code if any warnings
                              are generated.
  --print_free_field_numbers  Print the free field numbers of the messages
                              defined in the given proto files. Groups share
                              the same field number space with the parent
                              message. Extension ranges are counted as
                              occupied fields numbers.
  --plugin=EXECUTABLE         Specifies a plugin executable to use.
                              Normally, protoc searches the PATH for
                              plugins, but you may specify additional
                              executables not in the path using this flag.
                              Additionally, EXECUTABLE may be of the form
                              NAME=PATH, in which case the given plugin name
                              is mapped to the given executable even if
                              the executable&#39;s own name differs.
  --cpp_out=OUT_DIR           \u8FD9\u662F\u751F\u6210c++\u7684\u76EE\u5F55\uFF0C\u56E0\u4E3Aprotoc\u9ED8\u8BA4\u652F\u6301\u5F88\u591A\u8BED\u8A00\uFF0C\u5BF9\u4E8E\u4E0D\u652F\u6301\u7684\uFF0C\u5219\u9700\u8981\u5B89\u88C5\u5BF9\u5E94\u7684\u63D2\u4EF6\u5982protoc-gen-go
 
  @&lt;filename&gt;                 \u9700\u8981\u7F16\u8BD1\u7684protobuf\u6587\u4EF6\uFF0C\u628A\u5BF9\u5E94\u7684protobuf\u6587\u4EF6\u7F16\u7A0B\u6210\u5BF9\u5E94\u7684\u8BED\u8A00\u6587\u4EF6\u3002\u8FD9\u4E2A\u4E0D\u4F1A\u5F71\u54CD--proto_path\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u6307\u5B9Aproto_path/\u8DEF\u5F84\u6216\u8005\u76F4\u63A5\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5982\u679C\u8981\u6307\u5B9A*.proto\u8FD9\u79CD\uFF0C\u5219\u4E0D\u80FD\u53C2\u8003proto_path\u7EC4\u5408\uFF0C\u9700\u6307\u5B9A\u7EDD\u5BF9\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proto-path" tabindex="-1"><a class="header-anchor" href="#proto-path" aria-hidden="true">#</a> --proto_path</h3><p>\u8FD9\u4E2A\u53C2\u6570\u662F\u6BD4\u8F83\u91CD\u8981\u7684\uFF0C\u8FD9\u4E2A\u662F\u6307\u5B9A<code>protobuf</code>\u6839\u76EE\u5F55\u6240\u5728\u7684\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u662F\u5F53\u524D<code>./</code>\uFF0C\u8FD9\u4E2A\u7684\u7528\u9014\u5728\u4E8E\u5728<code>protobuf</code>\u4E2D<code>import</code>\u7684\u65F6\u5019\uFF0C\u4F1A\u4EE5\u8FD9\u4E2A\u76EE\u5F55\u5F00\u59CB\u67E5\u627E\uFF0C\u800C\u4E14\u52A0\u8F7D\u5176\u4ED6\u7684\u5916\u90E8\u6587\u4EF6\uFF0C\u4E5F\u8981\u6307\u5B9A\u5916\u90E8\u6587\u4EF6\u8DEF\u5F84\u5728\u54EA\u3001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 author
\u2502   \u2514\u2500\u2500 author.proto
\u2514\u2500\u2500 book
    \u251C\u2500\u2500 book.proto
    \u2514\u2500\u2500 price.proto
2 directories, 3 files


syntax = &quot;proto3&quot;;

// \u58F0\u660Eprotobuf\u4E2D\u7684\u5305\u540D
package book;

option go_package = &quot;sgrpc/proto/book&quot;; // \u751F\u6210\u5BF9\u5E94\u7684go\u4EE3\u7801package\u53D6\u7684\u662F\u6700\u540E\u4E00\u4E2A\uFF0C\u7136\u540E\u5982\u679C\u522B\u7684\u9879\u76EE\u8981\u5BFC\u5165\uFF0C\u5219\u662F\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2Aimport \u5305\u540D

// \u5F15\u5165\u540C\u76EE\u5F55\u4E0B\u7684protobuf\u6587\u4EF6\uFF08\u6CE8\u610F\u8D77\u59CB\u4F4D\u7F6E\u4E3Aproto_path\u7684\u4E0B\u5C42\uFF09
import &quot;author/author.proto&quot;;   # \u6240\u4EE5\u8FD9\u91CC\u5F15\u5165\u4E86author\u4E0B\u7684\uFF0C\u6240\u4EE5\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u4E00\u5B9A\u6307\u5B9A\u4E86\u4E00\u4E2A--proto_path=xx  xx\u4E0B\u9762\u5C31\u662Fauthor\u76EE\u5F55
import &quot;book/price.proto&quot;;
import &quot;google/protobuf/timestamp.proto&quot;;
import &quot;user/user.proto&quot;;

message Book {
  string title = 1;
  author.Info authorInfo = 2;  // \u9700\u8981\u5E26package\u524D\u7F00
  Price price = 3;  // \u540C\u76EE\u5F55\u4E0B\u65E0\u9700\u52A0\u5305\u524D\u7F00
  google.protobuf.Timestamp date = 4; // \u5F15\u5165google\u4E2D\u7684\u6269\u5C55
  user.User user = 5;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go-opt" tabindex="-1"><a class="header-anchor" href="#go-opt" aria-hidden="true">#</a> go_opt</h3><div class="language-makefile ext-makefile line-numbers-mode"><pre class="language-makefile"><code>PROJECT<span class="token operator">=</span><span class="token string">&quot;sgrpc&quot;</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> pb

<span class="token comment"># \u4F7F\u7528source_relative\uFF0C\u5219\u662F\u4F1A\u7F16\u8BD1\u597D\u7684go\u6587\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u548Cpbfile\u6E90\u6587\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u4E00\u81F4</span>
<span class="token target symbol">pb_path_relative</span><span class="token punctuation">:</span>
	protoc -I<span class="token operator">=</span>./pbfile \\
    --go_out<span class="token operator">=</span>./proto \\
    --go_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative \\
    book/book.proto author/author.proto

<span class="token comment"># \u4F7F\u7528import\uFF0C\u5219\u7F16\u8BD1\u597D\u7684\u76EE\u5F55\u662F\u5B8C\u5168\u548Cgo_package\u7684\u76EE\u5F55\u7ED3\u6784\u4E00\u81F4\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4E00\u822C\u548C--go_opt=module\u4E00\u8D77\u4F7F\u7528\uFF0C\u53BB\u9664\u524D\u7F00</span>
<span class="token target symbol">pb_path_import</span><span class="token punctuation">:</span>
	rm -rf proto
	protoc -I<span class="token operator">=</span>./pbfile<span class="token punctuation">:</span>./pb \\
    --go_out<span class="token operator">=</span>./ \\
    --go_opt<span class="token operator">=</span>paths<span class="token operator">=</span>import \\
    --go_opt<span class="token operator">=</span>module<span class="token operator">=</span>sgrpc \\
    ./pbfile/book/*.proto ./pbfile/author/*.proto	<span class="token comment"># \u6CE8\u610F\u4F7F\u7528*\u5339\u914D\u7684\u65F6\u5019\uFF0C\u8FD9\u91CC\u7684\u8DEF\u5F84\u4E00\u5B9A\u8981\u52A0\u5168\uFF0C\u800C\u4E0D\u80FD\u4F7F\u7528proto_path\u76F8\u5BF9\u4F4D\u7F6E</span>

<span class="token target symbol">pb_path_other</span><span class="token punctuation">:</span>
	protoc -I<span class="token operator">=</span>./pbfile<span class="token punctuation">:</span>./pb \\
        --go_out<span class="token operator">=</span>./ \\
        --go_opt<span class="token operator">=</span>paths<span class="token operator">=</span>import \\
        --go_opt<span class="token operator">=</span>module<span class="token operator">=</span>sgrpc \\
        ./pbfile/book/*.proto ./pbfile/author/*.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[o];function r(l,d){return n(),i("div",null,t)}var u=e(a,[["render",r],["__file","00-protoc.html.vue"]]);export{u as default};
