class Trie {
    constructor() {
        this.head = {};
    }
    add(word) {
        var curr;
        curr = this.head;
        for (var i = 0; i < word.length; i += 1) {
            let ch = word[i];
            if (!(ch in curr)) {
                curr[ch] = {};
            }
            curr = curr[ch];
        }

        curr["*"] = true;
    }
    f(curr, s, arr) {
        for (let el in curr) {
            if (el == "*") {
                arr.push(s);
            } else {
                this.f(curr[el], s + el, arr);
            }
        }
    }

    find(word) {
        var arr, curr, i;
        arr = [];
        curr = this.head;
        i = 0;
        while (i < word.length && (word[i] in curr)) {
            curr = curr[word[i]];
            i += 1;
        }
        if (i === word.length) {
            this.f(curr, word, arr);
            return arr;
        } else {
            return [];
        }
    }

}
var suggestedProducts = (products, searchWord) => {
    var a, res, tree;
    tree = new Trie();
    for (var i = 0; i < products.length; i += 1) {
        let el = products[i];
        tree.add(el);
    }
    res = [];

    for (var j = 1; j < searchWord.length + 1; j += 1) {
        a = tree.find(searchWord.slice(0, j));
        a.sort();
        if (a.length > 7) {
            res.push(a.slice(0, 7));
        } else {
            res.push(a);
        }
    }

    return res;
}
const languages = ["a# (axiom)", "a# .net", "a+", "a++", "a-0 system", "abap", "abc", "abc algol", "able", "abset", "absys", "acc", "acl2", "act-iii", "aimms", "alf", "algol 58", "algol 60", "algol 68", "algol w", "amos", "ampl", "apl", "arexx", "ats", "awk", "accent", "ace dasl", "action!", "actionscript", "ada", "adenine", "agda", "agilent vee", "agora", "alef", "alice", "alma-0", "ambienttalk", "amiga e", "app inventor for android's visual block language", "applescript", "arc", "argus", "aspectj", "assembly language", "ateji px", "autohotkey", "autoit", "autolisp / visual lisp", "autocoder", "averest", "axum", "b", "basic", "bcpl", "beta", "bliss", "bpel", "brew", "babbage", "bash", "batch (windows/dos)", "beanshell", "bertrand", "bigwig", "bistro", "bitc", "blue", "bon", "boo", "boomerang", "bourne shell", "c", "c shell", "c#", "c++", "c--", "c/al", "cduce", "cfengine", "cfml", "chain", "chill", "chip-8", "cics", "cil", "cl", "clist", "clu", "cms exec", "cms-2", "cobol", "code", "comal", "comit", "compass", "cowsel", "cpl", "csp", "cuda", "cach̩ objectscript", "caml", "candle", "cayenne", "cecil", "cel", "cesil", "ceylon", "cg", "ch", "chapel", "charity", "charm", "chef", "chuck", "cilk", "claire", "clarion", "clean", "clipper", "clojure", "cobra", "coffeescript", "cola", "coldc", "coldfusion", "combined programming language", "common intermediate language", "common lisp", "component pascal", "constraint handling rules", "converge", "cool", "coq", "corvision", "coral 66", "corn", "csound", "curl", "curry", "cyclone", "cython", "d", "dasl", "dasl", "datatrieve", "dcl", "dcl", "dibol", "drakon", "dynamo", "dart", "dataflex", "datalog", "deesel", "delphi", "dinkc", "dog", "draco", "dylan", "e", "e#", "easytrieve plus", "ecmascript", "egl", "elan", "epl", "espol", "exec 2", "ease", "easy pl / i", "easy programming language", "edinburgh imp", "eiffel", "elixir", "elm", "emacs lisp", "emerald", "epigram", "erlang", "escapade", "escher", "esterel", "etoys", "euclid", "euler", "euphoria", "euslisp robot programming language", "executable uml", "f", "f#", "f - script", "faust", "ffp", "fl", "flow - matic", "focal", "focus", "foil", "formac", "fp", "fpr", "fsprog", "factor", "falcon", "fancy", "fantom", "felix", "ferite", "fj̦lnir", "flavors", "flex", "forth", "fortran", "fortress", "foxbase", "foxpro", "franz lisp", "g", "g - code", "gams", "gap", "gdl", "george", "gj", "glsl", "gm", "gnu e", "goal", "gom (good old mad)", "gotran", "gpss", "grass", "game maker language", "gamemonkey script", "genie", "gibiane", "go", "go!", "godiva", "goo", "google apps script", "gosu", "graphtalk", "groovy", "g̦del", "hal/s", "hlsl", "hack (programming language)", "hamilton c shell", "harbour", "hartmann pipelines", "haskell", "haxe", "higgh level  assembly", "hop", "hope", "hugo", "hume", "hypertalk", "ibm basic assembly language", "ibm hascript", "ibm informix-4gl", "ibm rpg", "ici", "idl", "imp", "ipl", "iptscrae", "islisp", "ispf", "iswim", "icon", "id", "idris", "inform", "io", "ioke", "j", "j#", "j++", "jade", "jal", "jass", "jcl", "jean", "joss", "jovial", "jscript", "jscript .net", "jako", "janus", "java", "javafx script", "javascript", "join java", "joule", "joy", "julia", "jython", "k", "kee", "kif", "krc", "krl", "krypton", "kuka", "kaleidoscope", "karel", "karel++", "kixtart", "kojo", "kotlin", "l", "l# .net", "lansa", "lc-3", "lil", "linc", "lis", "lisa", "lpc", "lse", "lsl", "lyapas", "latex", "labview", "ladder", "lagoona", "lasso", "lava", "leda", "legoscript", "lilypond", "limbo", "limnor", "lingo", "linoleum", "lisaac", "lisp", "lite-c", "lithe", "little b", "livecode", "livescript", "logo", "logtalk", "lua", "lucid", "lustre", "lynx", "m2001", "m4", "mad", "mad/i", "mapper", "mark-iv", "masm microsoft assembly x86", "matlab", "mdl", "miis", "mimic", "miva script", "ml", "moo", "mpd", "msl", "mumps", "machine code", "macsyma", "magik", "magma", "maple", "mary", "mathematica", "max", "maxscript", "maxima", "maya (mel)", "mercury", "mesa", "metal", "metacard", "metafont", "microscript", "microcode", "millscript", "mirah", "miranda", "moby", "model 204", "modelica", "modula", "modula-2", "modula-3", "mohol", "mortran", "mouse", "nasm", "natural", "nesl", "newp", "ngl", "npl", "nsis", "nwscript", "nxt-g", "napier88", "neko", "nemerle", "net.data", "netlogo", "netrexx", "newlisp", "newspeak", "newtonscript", "nial", "nice", "nickle", "not quite c", "not exactly c", "nu", "obj2", "ocaml", "opl", "ops5", "orca/modula-2", "oak", "oberon", "obix", "object lisp", "object pascal", "object rexx", "objectlogo", "objective-c", "objective-j", "obliq", "obol", "octave", "omnimark", "onyx", "opa", "opal", "opencl", "openedge abl", "optimj", "orc", "oriel", "orwell", "oxygene", "oz", "p#", "pari/gp", "pcastl", "pcf", "pdl", "pearl", "php", "pikt", "pilot", "pl-11", "pl/0", "pl/b", "pl/c", "pl/i", "pl/m", "pl/p", "pl/sql", "pl360", "planc", "plex", "plexil", "pop-11", "ppl", "proiv", "promal", "prose modeling language", "protel", "parasail (programming language)", "pascal", "pawn", "peoplecode", "perl", "phrogram", "pico", "picolisp", "pict", "pike", "pipelines", "pizza", "planner", "plus", "portable", "postscript", "powerbuilder", "powershell", "powerhouse", "pro*c", "processing", "processing.js", "prograph", "prolog", "promela", "providex", "pure", "python", "q (equational programming language)", "q (programming language from kx systems)", "qpl", "qalb", "qi", "qtscript", "quakec", "r", "r++", "rapid", "rebol", "refal", "rexx", "roop", "rpg", "rpl", "rsl", "rtl/2", "racket", "rapira", "ratfiv", "ratfor", "red", "redcode", "reia", "revolution", "rlab", "robotc", "ruby", "runescript", "rust", "s", "s-lang", "s-plus", "s/sl", "s2", "s3", "sa-c", "sail", "salsa", "sam76", "sas", "sasl", "sbl", "setl", "signal", "simpol", "simscript", "sisal", "slip", "small", "sml", "snobol", "sol", "sp/k", "spark", "spin", "spitbol", "sps", "sr", "sympl", "sabretalk", "sather", "sawzall", "scala", "scheme", "scilab", "scratch", "script.net", "sed", "seed7", "self", "sensetalk", "sequencel", "shakespeare", "shift script", "simple", "simula", "simulink", "small basic", "smalltalk", "snap!", "snowball", "span", "squeak", "squirrel", "stackless python", "starlogo", "stata", "stateflow", "strand", "subtext", "supercollider", "supertalk", "swift (apple programming language)", "swift (parallel scripting language)", "synccharts", "systemverilog", "t", "t-sql", "tacl", "tacpol", "tads", "tal", "teco", "telcomp", "tex", "tie", "tmg", "tom", "tpu", "ttcn", "ttm", "tutor", "txl", "tcl", "tex", "tea", "timber", "tom", "topspeed", "trac", "turbo c++", "turing", "typescript", "ucsd pascal", "unity", "ubercode", "umple", "unicon", "uniface", "unix shell", "unrealscript", "vba", "vbscript", "vhdl", "vsxu", "vala", "verilog", "visual basic", "visual basic .net", "visual dataflex", "visual dialogscript", "visual fortran", "visual foxpro", "visual j#", "visual j++", "visual objects", "visual prolog", "vvvv", "watfiv, watfor", "webdna", "webql", "winbatch", "windows powershell", "wolfram", "wyvern", "x#", "x++", "x10", "xbl", "xc", "xl", "xmos architecture", "xotcl", "xpl", "xpl0", "xpath", "xquery", "xsb", "xslt", "xojo", "xtend", "yql", "yorick", "z notation", "zopl", "zpl", "zeno", "bash", "bc", "chomski", "csh", "dbase", "dc", "es", "ksh", "ksh", "make", "nesc", "o:xml", "occam", "rc", "rex", "xharbour"]
document.getElementById("datalist").addEventListener("keyup", (e) => {
    let word = e.target.value
    let a = suggestedProducts(languages, word.toLowerCase()).pop()
    if (a != undefined) {
        let target = document.getElementById("datalistOptions");
        var child = target.lastElementChild;
        while (child) {
            target.removeChild(child);
            child = target.lastElementChild;
        }
        for (var i = 0; i < a.length; i++) {
            const opt = document.createElement("option");
            opt.value = a[i]
            opt.innerHTML = a[i]
            document.getElementById("datalistOptions").appendChild(opt)
        }
    }
})