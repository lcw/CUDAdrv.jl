var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#CUDAdrv.jl-1",
    "page": "Home",
    "title": "CUDAdrv.jl",
    "category": "section",
    "text": "A Julia wrapper for the CUDA driver API.This package aims to provide high-level wrappers for the functionality exposed by the CUDA driver API, and is meant for users who need high- or low-level access to the CUDA toolkit or the underlying hardware.The package is built upon the low-level CUDA driver API, but that shouldn't make the Julia wrapper any harder to use. That said, it is a work-in-progress and does not offer the same functionality or convenience as the more popular CUDArt package, which is built upon the higher-level CUDA runtime API."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Requirements:Julia 0.5 or higher (use v0.1.0 of this package for compatibility with Julia 0.4)\nNVIDIA driver, providing libcuda.so (the full CUDA toolkit is not required)\nCUDA hardwareAt the Julia REPL:Pkg.add(\"CUDAdrv\")\nusing CUDAdrv\n\n# optionally\nPkg.test(\"CUDAdrv\")Building CUDAdrv might display error messages, indicating issues with your set-up. These messages can be cryptic as they happen too early for decent error handling to be loaded. However, please pay close attention to them as they might prevent CUDAdrv.jl from working properly! Some common issues:unknown error (code 999): this often indicates that your set-up is broken, eg. because you didn't load the correct, or any, kernel module. Please verify your set-up, on Linux by executing nvidia-smi or on other platforms by compiling and running CUDA C code using nvcc.\nno device (code 100): CUDA didn't detect your device, because it is not supported by CUDA or because you loaded the wrong kernel driver (eg. legacy when you need regular, or vice-versa). CUDAdrv.jl cannot work in this case, because CUDA does not allow us to query the driver version without a valid device, something we need in order to version the API calls.\nusing library stubs (code -1): if any API call returns -1, you're probably using the CUDA driver library stubs which return this value for every function call. This is not supported by CUDAdrv.jl, and is only intended to be used when compiling C or C++ code to be linked with libcuda.so at a time when that library isn't available yet. Unless you purposefully added the stub libraries to the search path, please run the build script with DEBUG=1 and file a bug report.Even if the build fails, CUDAdrv.jl should always be loadable. This simplifies use by downstream packages, until there is proper language support for conditional modules. You can check whether the package has been built properly by inspecting the CUDAdrv.configured global variable."
},

{
    "location": "man/usage.html#",
    "page": "Usage",
    "title": "Usage",
    "category": "page",
    "text": ""
},

{
    "location": "man/usage.html#Usage-1",
    "page": "Usage",
    "title": "Usage",
    "category": "section",
    "text": "Quick start:DocTestSetup = quote\n    using CUDAdrv\nenddev = CuDevice(0);\nctx = CuContext(dev);\n\ndestroy!(ctx)\n\n# output\n"
},

{
    "location": "man/usage.html#Automatic-memory-management-1",
    "page": "Usage",
    "title": "Automatic memory management",
    "category": "section",
    "text": "Except for the encapsulating context, destroy or unload calls are never needed. Objects are registered with the Julia garbage collector, and are automatically finalized when they go out of scope.However, many CUDA API functions implicitly depend on global state, such as the current active context. The wrapper needs to model those dependencies in order for objects not to get destroyed before any dependent object is. If we fail to model these dependency relations, API calls might randomly fail, eg. in the case of a missing context dependency with a INVALID_CONTEXT or CONTEXT_IS_DESTROYED error message.If this seems to be the case, re-run with TRACE=1 and file a bug report."
},

{
    "location": "man/usage.html#Troubleshooting-1",
    "page": "Usage",
    "title": "Troubleshooting",
    "category": "section",
    "text": "You can enable verbose logging using two environment variables:DEBUG: if set, enable additional (possibly costly) run-time checks, and some more verbose output\nTRACE: if set, the DEBUG level will be activated, in addition with a trace of every call to the underlying libraryIn order to avoid run-time cost for checking the log level, these flags are implemented by means of global constants. As a result, you need to run Julia with precompilation disabled if you want to modify these flags:$ TRACE=1 julia --compilecache=no examples/vadd.jl\nTRACE: CUDAdrv.jl is running in trace mode, this will generate a lot of additional output\n...Enabling colors with --color=yes is also recommended as it color-codes the output."
},

{
    "location": "lib/api.html#",
    "page": "API wrappers",
    "title": "API wrappers",
    "category": "page",
    "text": ""
},

{
    "location": "lib/api.html#API-wrappers-1",
    "page": "API wrappers",
    "title": "API wrappers",
    "category": "section",
    "text": "This section lists the package's public functionality that directly corresponds to functionality of the CUDA driver API. In general, the abstractions stay close to those of the CUDA driver API, so for more information on certain library calls you can consult the CUDA driver API reference.The documentation is grouped according to the modules of the driver API."
},

{
    "location": "lib/api.html#CUDAdrv.vendor",
    "page": "API wrappers",
    "title": "CUDAdrv.vendor",
    "category": "Function",
    "text": "Returns a string identifying the vendor of your CUDA driver.\n\n\n\n"
},

{
    "location": "lib/api.html#Installation-properties-1",
    "page": "API wrappers",
    "title": "Installation properties",
    "category": "section",
    "text": "CUDAdrv.vendor"
},

{
    "location": "lib/api.html#CUDAdrv.init",
    "page": "API wrappers",
    "title": "CUDAdrv.init",
    "category": "Function",
    "text": "Initialize the CUDA driver API.\n\nThis function is automatically called upon loading the package. You should not have to call this manually.\n\n\n\n"
},

{
    "location": "lib/api.html#Initialization-1",
    "page": "API wrappers",
    "title": "Initialization",
    "category": "section",
    "text": "CUDAdrv.init"
},

{
    "location": "lib/api.html#CUDAdrv.CuError",
    "page": "API wrappers",
    "title": "CUDAdrv.CuError",
    "category": "Type",
    "text": "CuError(code::Integer)\nCuError(code::Integer, info::String)\n\nCreate a CUDA error object with error code code. The optional info parameter indicates whether extra information, such as error logs, is known.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.name-Tuple{CUDAdrv.CuError}",
    "page": "API wrappers",
    "title": "CUDAdrv.name",
    "category": "Method",
    "text": "name(err::CuError)\n\nGets the string representation of an error code.\n\nThis name can often be used as a symbol in source code to get an instance of this error. For example:\n\njulia> using CUDAdrv\n\njulia> err = CuError(1)\nCuError(1, ERROR_INVALID_VALUE)\n\njulia> name(err)\n\"ERROR_INVALID_VALUE\"\n\njulia> CUDAdrv.ERROR_INVALID_VALUE\nCuError(1, ERROR_INVALID_VALUE)\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.description-Tuple{CUDAdrv.CuError}",
    "page": "API wrappers",
    "title": "CUDAdrv.description",
    "category": "Method",
    "text": "description(err::CuError)\n\nGets the string description of an error code.\n\n\n\n"
},

{
    "location": "lib/api.html#Error-Handling-1",
    "page": "API wrappers",
    "title": "Error Handling",
    "category": "section",
    "text": "CUDAdrv.CuError\nCUDAdrv.name(::CuError)\nCUDAdrv.description(::CuError)"
},

{
    "location": "lib/api.html#CUDAdrv.version-Tuple{}",
    "page": "API wrappers",
    "title": "CUDAdrv.version",
    "category": "Method",
    "text": "version()\n\nReturns the CUDA version as reported by the driver.\n\n\n\n"
},

{
    "location": "lib/api.html#Version-Management-1",
    "page": "API wrappers",
    "title": "Version Management",
    "category": "section",
    "text": "CUDAdrv.version()"
},

{
    "location": "lib/api.html#CUDAdrv.CuDevice",
    "page": "API wrappers",
    "title": "CUDAdrv.CuDevice",
    "category": "Type",
    "text": "CuDevice(i::Integer)\n\nGet a handle to a compute device.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.devices",
    "page": "API wrappers",
    "title": "CUDAdrv.devices",
    "category": "Function",
    "text": "devices()\n\nGet an iterator for the compute devices.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.name-Tuple{CUDAdrv.CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.name",
    "category": "Method",
    "text": "name(dev::CuDevice)\n\nReturns an identifier string for the device.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.totalmem-Tuple{CUDAdrv.CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.totalmem",
    "category": "Method",
    "text": "totalmem(dev::CuDevice)\n\nReturns the total amount of memory (in bytes) on the device.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.attribute",
    "page": "API wrappers",
    "title": "CUDAdrv.attribute",
    "category": "Function",
    "text": "attribute(dev::CuDevice, code)\n\nReturns information about the device.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.capability-Tuple{CUDAdrv.CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.capability",
    "category": "Method",
    "text": "capability(dev::CuDevice)\n\nReturns the compute capability of the device.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.warpsize-Tuple{CUDAdrv.CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.warpsize",
    "category": "Method",
    "text": "warpsize(dev::CuDevice)\n\nReturns the warp size (in threads) of the device.\n\n\n\n"
},

{
    "location": "lib/api.html#Device-Management-1",
    "page": "API wrappers",
    "title": "Device Management",
    "category": "section",
    "text": "CUDAdrv.CuDevice\nCUDAdrv.devices\nCUDAdrv.name(::CuDevice)\nCUDAdrv.totalmem(::CuDevice)\nCUDAdrv.attributeCertain common attributes are exposed by additional convenience functions:CUDAdrv.capability(::CuDevice)\nCUDAdrv.warpsize(::CuDevice)"
},

{
    "location": "lib/api.html#CUDAdrv.CuContext",
    "page": "API wrappers",
    "title": "CUDAdrv.CuContext",
    "category": "Type",
    "text": "CuContext(dev::CuDevice, flags::CUctx_flags=SCHED_AUTO)\nCuContext(f::Function, ...)\n\nCreate a CUDA context for device. A context on the GPU is analogous to a process on the CPU, with its own distinct address space and allocated resources. When a context is destroyed, the system cleans up the resources allocated to it.\n\nContexts are unique instances which need to be destroyed after use. For automatic management, prefer the do block syntax, which implicitly calls destroy.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.destroy!-Tuple{CUDAdrv.CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.destroy!",
    "category": "Method",
    "text": "destroy!(ctx::CuContext)\n\nMark a context for destruction.\n\nThis does not immediately destroy the context, as there might still be dependent resources which have not been collected yet. The context will get freed as soon as all outstanding instances have been finalized.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.CuCurrentContext",
    "page": "API wrappers",
    "title": "CUDAdrv.CuCurrentContext",
    "category": "Function",
    "text": "CuCurrentContext()\n\nReturn the current context, or a NULL context if there is no active context (see isnull).\n\n\n\n"
},

{
    "location": "lib/api.html#Base.isnull-Tuple{CUDAdrv.CuContext}",
    "page": "API wrappers",
    "title": "Base.isnull",
    "category": "Method",
    "text": "isnull(ctx::CuContext)\n\nIndicates whether the current context is an invalid NULL context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.activate-Tuple{CUDAdrv.CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.activate",
    "category": "Method",
    "text": "activate(ctx::CuContext)\n\nBinds the specified CUDA context to the calling CPU thread.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.synchronize-Tuple{CUDAdrv.CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.synchronize",
    "category": "Method",
    "text": "synchronize(ctx::CuContext=CuCurrentContext())\n\nBlock for a context's tasks to complete.\n\nThe ctx parameter defaults to the current active context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.device-Tuple{CUDAdrv.CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.device",
    "category": "Method",
    "text": "device(ctx::Cucontext)\n\nReturns the device for the current context. The ctx parameter is to make sure that the current context is really active, and hence the returned device is valid.\n\n\n\n"
},

{
    "location": "lib/api.html#Context-Management-1",
    "page": "API wrappers",
    "title": "Context Management",
    "category": "section",
    "text": "CUDAdrv.CuContext\nCUDAdrv.destroy!(::CuContext)\nCUDAdrv.CuCurrentContext\nCUDAdrv.isnull(::CuContext)\nCUDAdrv.activate(::CuContext)\nCUDAdrv.synchronize(::CuContext)\nCUDAdrv.device(::CuContext)"
},

{
    "location": "lib/api.html#CUDAdrv.CuPrimaryContext",
    "page": "API wrappers",
    "title": "CUDAdrv.CuPrimaryContext",
    "category": "Type",
    "text": "CuPrimaryContext(dev::CuDevice)\n\nCreate a primary CUDA context for a given device.\n\nEach primary context is unique per device and is shared with CUDA runtime API. It is meant for interoperability with (applications using) the runtime API.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.CuContext-Tuple{CUDAdrv.CuPrimaryContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.CuContext",
    "category": "Method",
    "text": "CuContext(pctx::CuPrimaryContext)\nCuContext(f::Function, pctx::CuPrimaryContext)\n\nRetain the primary context on the GPU, returning a context compatible with the driver API. The primary context will be released when the returned driver context is finalized. For that reason, it is advised to use this function with do block syntax.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.isactive-Tuple{CUDAdrv.CuPrimaryContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.isactive",
    "category": "Method",
    "text": "isactive(pctx::CuPrimaryContext)\n\nQuery whether a primary context is active.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.flags-Tuple{CUDAdrv.CuPrimaryContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.flags",
    "category": "Method",
    "text": "flags(pctx::CuPrimaryContext)\n\nQuery the flags of a primary context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.setflags!-Tuple{CUDAdrv.CuPrimaryContext,CUDAdrv.CUctx_flags}",
    "page": "API wrappers",
    "title": "CUDAdrv.setflags!",
    "category": "Method",
    "text": "setflags!(pctx::CuPrimaryContext)\n\nSet the flags of a primary context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.unsafe_reset!-Tuple{CUDAdrv.CuPrimaryContext,Bool}",
    "page": "API wrappers",
    "title": "CUDAdrv.unsafe_reset!",
    "category": "Method",
    "text": "unsafe_reset!(pctx::CuPrimaryContext, [checked::Bool=true])\n\nExplicitly destroys and cleans up all resources associated with a device's primary context in the current process. Note that this forcibly invalidates all contexts derived from this primary context, and as a result outstanding resources might become invalid.\n\nIt is normally unnecessary to call this function, as resource are automatically freed when contexts go out of scope. In the case of primary contexts, they are collected when all contexts derived from that primary context have gone out of scope.\n\nThe checked argument determines whether to verify that the primary context has become inactive after resetting the derived driver contexts. This may not be possible, eg. if the CUDA runtime API itself has retained an additional context instance.\n\n\n\n"
},

{
    "location": "lib/api.html#Primary-Context-Management-1",
    "page": "API wrappers",
    "title": "Primary Context Management",
    "category": "section",
    "text": "CUDAdrv.CuPrimaryContext\nCUDAdrv.CuContext(::CuPrimaryContext)\nCUDAdrv.isactive(::CuPrimaryContext)\nCUDAdrv.flags(::CuPrimaryContext)\nCUDAdrv.setflags!(::CuPrimaryContext, ::CUDAdrv.CUctx_flags)\nCUDAdrv.unsafe_reset!(::CuPrimaryContext, ::Bool)"
},

{
    "location": "lib/api.html#CUDAdrv.CuModule",
    "page": "API wrappers",
    "title": "CUDAdrv.CuModule",
    "category": "Type",
    "text": "CuModule(data, options::Dict{CUjit_option,Any})\nCuModuleFile(path, options::Dict{CUjit_option,Any})\n\nCreate a CUDA module from a data, or a file containing data. The data may be PTX code, a CUBIN, or a FATBIN.\n\nThe options is an optional dictionary of JIT options and their respective value.\n\n\n\n"
},

{
    "location": "lib/api.html#Module-Management-1",
    "page": "API wrappers",
    "title": "Module Management",
    "category": "section",
    "text": "CUDAdrv.CuModule"
},

{
    "location": "lib/api.html#CUDAdrv.CuFunction",
    "page": "API wrappers",
    "title": "CUDAdrv.CuFunction",
    "category": "Type",
    "text": "CuFunction(mod::CuModule, name::String)\n\nAcquires a function handle from a named function in a module.\n\n\n\n"
},

{
    "location": "lib/api.html#Function-Management-1",
    "page": "API wrappers",
    "title": "Function Management",
    "category": "section",
    "text": "CUDAdrv.CuFunction"
},

{
    "location": "lib/api.html#CUDAdrv.CuGlobal",
    "page": "API wrappers",
    "title": "CUDAdrv.CuGlobal",
    "category": "Type",
    "text": "CuGlobal{T}(mod::CuModule, name::String)\n\nAcquires a typed global variable handle from a named global in a module.\n\n\n\n"
},

{
    "location": "lib/api.html#Base.eltype-Tuple{CUDAdrv.CuGlobal}",
    "page": "API wrappers",
    "title": "Base.eltype",
    "category": "Method",
    "text": "eltype(var::CuGlobal)\n\nReturn the element type of a global variable object.\n\n\n\n"
},

{
    "location": "lib/api.html#Base.get-Tuple{CUDAdrv.CuGlobal}",
    "page": "API wrappers",
    "title": "Base.get",
    "category": "Method",
    "text": "get(var::CuGlobal)\n\nReturn the current value of a global variable.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.set-Union{Tuple{CUDAdrv.CuGlobal{T},T}, Tuple{T}} where T",
    "page": "API wrappers",
    "title": "CUDAdrv.set",
    "category": "Method",
    "text": "set(var::CuGlobal{T}, T)\n\nSet the value of a global variable to val\n\n\n\n"
},

{
    "location": "lib/api.html#Global-Variable-Management-1",
    "page": "API wrappers",
    "title": "Global Variable Management",
    "category": "section",
    "text": "CUDAdrv.CuGlobal\nCUDAdrv.eltype(::CuGlobal)\nCUDAdrv.get(::CuGlobal)\nCUDAdrv.set{T}(::CuGlobal{T}, ::T)"
},

{
    "location": "lib/api.html#CUDAdrv.CuLink",
    "page": "API wrappers",
    "title": "CUDAdrv.CuLink",
    "category": "Type",
    "text": "CuLink()\n\nCreates a pending JIT linker invocation.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.addData",
    "page": "API wrappers",
    "title": "CUDAdrv.addData",
    "category": "Function",
    "text": "addData(link::CuLink, name::String, data, type::CUjit_input)\n\nAdd data to a link operation. The argument typ indicates the type of the data.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.addFile",
    "page": "API wrappers",
    "title": "CUDAdrv.addFile",
    "category": "Function",
    "text": "addFile(link::CuLink, path::String, typ::CUjit_input)\n\nAdd data from a file to a link operation. The argument typ indicates the type of the contained data.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.CuLinkImage",
    "page": "API wrappers",
    "title": "CUDAdrv.CuLinkImage",
    "category": "Type",
    "text": "The result of a linking operation.\n\nThis object keeps its parent linker object alive, as destroying a linker destroys linked images too.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.complete",
    "page": "API wrappers",
    "title": "CUDAdrv.complete",
    "category": "Function",
    "text": "complete(link::CuLink)\n\nComplete a pending linker invocation, returning an output image.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.CuModule-Tuple{CUDAdrv.CuLinkImage,Vararg{Any,N} where N}",
    "page": "API wrappers",
    "title": "CUDAdrv.CuModule",
    "category": "Method",
    "text": "CuModule(img::CuLinkImage, ...)\nCuModule(f::Function, img::CuLinkImage, ...)\n\nCreate a CUDA module from a completed linking operation. Options from CuModule apply.\n\n\n\n"
},

{
    "location": "lib/api.html#Linker-1",
    "page": "API wrappers",
    "title": "Linker",
    "category": "section",
    "text": "CUDAdrv.CuLink\nCUDAdrv.addData\nCUDAdrv.addFile\nCUDAdrv.CuLinkImage\nCUDAdrv.complete\nCUDAdrv.CuModule(::CUDAdrv.CuLinkImage, args...)"
},

{
    "location": "lib/api.html#Memory-Management-1",
    "page": "API wrappers",
    "title": "Memory Management",
    "category": "section",
    "text": ""
},

{
    "location": "lib/api.html#CUDAdrv.Mem.alloc-Tuple{Integer}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.alloc",
    "category": "Method",
    "text": "alloc(bytes::Integer)\n\nAllocates bytesize bytes of linear memory on the device and returns a pointer to the allocated memory. The allocated memory is suitably aligned for any kind of variable. The memory is not cleared, use free(::OwnedPtr) for that.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.free-Tuple{CUDAdrv.OwnedPtr}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.free",
    "category": "Method",
    "text": "free(p::OwnedPtr)\n\nFrees device memory.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.info",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.info",
    "category": "Function",
    "text": "info()\n\nReturns a tuple of two integers, indicating respectively the free and total amount of memory (in bytes) available for allocation by the CUDA context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.total",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.total",
    "category": "Function",
    "text": "total()\n\nReturns the total amount of memory (in bytes), available for allocation by the CUDA context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.used",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.used",
    "category": "Function",
    "text": "used()\n\nReturns the used amount of memory (in bytes), allocated by the CUDA context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.free-Tuple{}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.free",
    "category": "Method",
    "text": "free()\n\nReturns the free amount of memory (in bytes), available for allocation by the CUDA context.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.set",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.set",
    "category": "Function",
    "text": "set(p::OwnedPtr, value::Cuint, len::Integer)\n\nInitializes device memory, copying the value val for len times.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.upload-Tuple{CUDAdrv.OwnedPtr,Ref,Integer}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.upload",
    "category": "Method",
    "text": "upload(dst::OwnedPtr, src, nbytes::Integer)\n\nUpload nbytes memory from src at the host to dst on the device.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.download-Tuple{Ref,CUDAdrv.OwnedPtr,Integer}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.download",
    "category": "Method",
    "text": "download(dst::OwnedPtr, src, nbytes::Integer)\n\nDownload nbytes memory from src on the device to src on the host.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.transfer",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.transfer",
    "category": "Function",
    "text": "download(dst::OwnedPtr, src, nbytes::Integer)\n\nTransfer nbytes of device memory from src to dst.\n\n\n\n"
},

{
    "location": "lib/api.html#Pointer-based-(low-level)-1",
    "page": "API wrappers",
    "title": "Pointer-based (low-level)",
    "category": "section",
    "text": "CUDAdrv.Mem.alloc(::Integer)\nCUDAdrv.Mem.free(::CUDAdrv.OwnedPtr)\nCUDAdrv.Mem.info\nCUDAdrv.Mem.total\nCUDAdrv.Mem.used\nCUDAdrv.Mem.free()\nCUDAdrv.Mem.set\nCUDAdrv.Mem.upload(::CUDAdrv.OwnedPtr, ::Ref, ::Integer)\nCUDAdrv.Mem.download(::Ref, ::CUDAdrv.OwnedPtr, ::Integer)\nCUDAdrv.Mem.transfer"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.alloc-Tuple{Type,Integer}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.alloc",
    "category": "Method",
    "text": "alloc{T}(len=1)\n\nAllocates space for len objects of type T on the device and returns a pointer to the allocated memory. The memory is not cleared, use free(::OwnedPtr) for that.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.upload-Union{Tuple{CUDAdrv.OwnedPtr{T},T}, Tuple{T}} where T",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.upload",
    "category": "Method",
    "text": "upload{T}(src::T)\nupload{T}(dst::OwnedPtr{T}, src::T)\n\nUpload an object src from the host to the device. If a destination dst is not provided, new memory is allocated and uploaded to.\n\nNote this does only upload the object itself, and does not peek through it in order to get to the underlying data (like Ref does). Consequently, this functionality should not be used to transfer eg. arrays, use CuArray's copy! functionality for that.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Mem.download-Tuple{CUDAdrv.OwnedPtr}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.download",
    "category": "Method",
    "text": "download{T}(src::OwnedPtr{T})\n\nDownload an object src from the device and return it as a host object.\n\nSee upload for notes on how arguments are processed.\n\n\n\n"
},

{
    "location": "lib/api.html#Object-based-(high-level)-1",
    "page": "API wrappers",
    "title": "Object-based (high-level)",
    "category": "section",
    "text": "CUDAdrv.Mem.alloc(::Type, ::Integer)\nCUDAdrv.Mem.upload{T}(::CUDAdrv.OwnedPtr{T}, ::T)\nCUDAdrv.Mem.download(::CUDAdrv.OwnedPtr)"
},

{
    "location": "lib/api.html#CUDAdrv.CuStream",
    "page": "API wrappers",
    "title": "CUDAdrv.CuStream",
    "category": "Type",
    "text": "CuStream(flags=0)\n\nCreate a CUDA stream.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.CuDefaultStream",
    "page": "API wrappers",
    "title": "CUDAdrv.CuDefaultStream",
    "category": "Function",
    "text": "CuDefaultStream()\n\nReturn the default stream.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.synchronize-Tuple{CUDAdrv.CuStream}",
    "page": "API wrappers",
    "title": "CUDAdrv.synchronize",
    "category": "Method",
    "text": "synchronize(s::CuStream)\n\nWait until a stream's tasks are completed.\n\n\n\n"
},

{
    "location": "lib/api.html#Stream-Management-1",
    "page": "API wrappers",
    "title": "Stream Management",
    "category": "section",
    "text": "CUDAdrv.CuStream\nCUDAdrv.CuDefaultStream\nCUDAdrv.synchronize(::CuStream)"
},

{
    "location": "lib/api.html#CUDAdrv.CuEvent",
    "page": "API wrappers",
    "title": "CUDAdrv.CuEvent",
    "category": "Type",
    "text": "CuEvent()\n\nCreate a new CUDA event.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.record",
    "page": "API wrappers",
    "title": "CUDAdrv.record",
    "category": "Function",
    "text": "record(e::CuEvent, stream=CuDefaultStream())\n\nRecord an event on a stream.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.synchronize-Tuple{CUDAdrv.CuEvent}",
    "page": "API wrappers",
    "title": "CUDAdrv.synchronize",
    "category": "Method",
    "text": "synchronize(e::CuEvent)\n\nWaits for an event to complete.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.elapsed",
    "page": "API wrappers",
    "title": "CUDAdrv.elapsed",
    "category": "Function",
    "text": "elapsed(start::CuEvent, stop::CuEvent)\n\nComputes the elapsed time between two events (in seconds).\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.@elapsed",
    "page": "API wrappers",
    "title": "CUDAdrv.@elapsed",
    "category": "Macro",
    "text": "@elapsed stream ex\n@elapsed ex\n\nA macro to evaluate an expression, discarding the resulting value, instead returning the number of seconds it took to execute on the GPU, as a floating-point number.\n\n\n\n"
},

{
    "location": "lib/api.html#Event-Management-1",
    "page": "API wrappers",
    "title": "Event Management",
    "category": "section",
    "text": "CUDAdrv.CuEvent\nCUDAdrv.record\nCUDAdrv.synchronize(::CuEvent)\nCUDAdrv.elapsed\nCUDAdrv.@elapsed"
},

{
    "location": "lib/api.html#CUDAdrv.CuDim3",
    "page": "API wrappers",
    "title": "CUDAdrv.CuDim3",
    "category": "Type",
    "text": "CuDim3(x)\n\nCuDim3((x,))\nCuDim3((x, y))\nCuDim3((x, y, x))\n\nA type used to specify dimensions, consisting of 3 integers for respectively the x, y and z dimension. Unspecified dimensions default to 1.\n\nOften accepted as argument through the CuDim type alias, eg. in the case of cudacall or launch, allowing to pass dimensions as a plain integer or a tuple without having to construct an explicit CuDim3 object.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.cudacall",
    "page": "API wrappers",
    "title": "CUDAdrv.cudacall",
    "category": "Function",
    "text": "cudacall(f::CuFunction, griddim::CuDim, blockdim::CuDim, types, values;\n         shmem=0, stream=CuDefaultStream())\ncudacall(f::CuFunction, griddim::CuDim, blockdim::CuDim,\n         shmem::Integer, stream::CuStream,\n         types, values)\n\nccall-like interface for launching a CUDA function f on a GPU.\n\nFor example:\n\nvadd = CuFunction(md, \"vadd\")\na = rand(Float32, 10)\nb = rand(Float32, 10)\nad = CuArray(a)\nbd = CuArray(b)\nc = zeros(Float32, 10)\ncd = CuArray(c)\n\ncudacall(vadd, 10, 1, (Ptr{Cfloat},Ptr{Cfloat},Ptr{Cfloat}), ad, bd, cd)\nc = Array(cd)\n\nThe griddim and blockdim arguments control the launch configuration, and should both consist of either an integer, or a tuple of 1 to 3 integers (omitted dimensions default to 1).\n\nBoth a version with and without keyword arguments is provided, the latter being slightly faster, but not providing default values for the shmem and stream arguments. In addition, the types argument can contain both a tuple of types, and a tuple type, again the former being slightly faster.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.launch",
    "page": "API wrappers",
    "title": "CUDAdrv.launch",
    "category": "Function",
    "text": "launch(f::CuFunction, griddim::CuDim, blockdim::CuDim, args...;\n       shmem=0, stream=CuDefaultStream())\nlaunch(f::CuFunction, griddim::CuDim, blockdim::CuDim, shmem::Int, stream::CuStream, args...)\n\nLow-level call to launch a CUDA function f on the GPU, using griddim and blockdim as respectively the grid and block configuration. Dynamic shared memory is allocated according to shmem, and the kernel is launched on stream stream.\n\nArguments to a kernel should either be bitstype, in which case they will be copied to the internal kernel parameter buffer, or a pointer to device memory.\n\nBoth a version with and without keyword arguments is provided, the latter being slightly faster, but not providing default values for the shmem and stream arguments.\n\nThis is a low-level call, prefer to use cudacall instead.\n\n\n\n"
},

{
    "location": "lib/api.html#Execution-Control-1",
    "page": "API wrappers",
    "title": "Execution Control",
    "category": "section",
    "text": "CUDAdrv.CuDim3\nCUDAdrv.cudacall\nCUDAdrv.launch"
},

{
    "location": "lib/api.html#CUDAdrv.@profile",
    "page": "API wrappers",
    "title": "CUDAdrv.@profile",
    "category": "Macro",
    "text": "@profile ex\n\nRun expressions while activating the CUDA profiler.\n\nNote that this API is used to programmatically control the profiling granularity by allowing profiling to be done only on selective pieces of code. It does not perform any profiling on itself, you need external tools for that.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Profile.start",
    "page": "API wrappers",
    "title": "CUDAdrv.Profile.start",
    "category": "Function",
    "text": "start()\n\nEnables profile collection by the active profiling tool for the current context. If profiling is already enabled, then this call has no effect.\n\n\n\n"
},

{
    "location": "lib/api.html#CUDAdrv.Profile.stop",
    "page": "API wrappers",
    "title": "CUDAdrv.Profile.stop",
    "category": "Function",
    "text": "stop()\n\nDisables profile collection by the active profiling tool for the current context. If profiling is already disabled, then this call has no effect.\n\n\n\n"
},

{
    "location": "lib/api.html#Profiler-Control-1",
    "page": "API wrappers",
    "title": "Profiler Control",
    "category": "section",
    "text": "CUDAdrv.@profile\nCUDAdrv.Profile.start\nCUDAdrv.Profile.stop"
},

{
    "location": "lib/array.html#",
    "page": "Arrays",
    "title": "Arrays",
    "category": "page",
    "text": ""
},

{
    "location": "lib/array.html#CUDAdrv.CuArray",
    "page": "Arrays",
    "title": "CUDAdrv.CuArray",
    "category": "Type",
    "text": "CuArray{T}(dims)\nCuArray{T,N}(dims)\n\nConstruct an uninitialized N-dimensional dense CUDA array with element type T, where N is determined from the length or number of dims. dims may be a tuple or a series of integer arguments corresponding to the lengths in each dimension. If the rank N is supplied explicitly as in Array{T,N}(dims), then it must match the length or number of dims.\n\nType aliases CuVector and CuMatrix are available for respectively 1 and 2-dimensional data.\n\n\n\n"
},

{
    "location": "lib/array.html#Base.copy!-Union{Tuple{CUDAdrv.CuArray{T,N} where N,Array{T,N} where N}, Tuple{T}} where T",
    "page": "Arrays",
    "title": "Base.copy!",
    "category": "Method",
    "text": "copy!{T}(dst::CuArray{T}, src::Array{T})\n\nCopy an array from a host array src to a device array dst in place. Both arrays should have an equal length.\n\n\n\n"
},

{
    "location": "lib/array.html#Base.copy!-Union{Tuple{Array{T,N} where N,CUDAdrv.CuArray{T,N} where N}, Tuple{T}} where T",
    "page": "Arrays",
    "title": "Base.copy!",
    "category": "Method",
    "text": "copy!{T}(dst::Array{T}, src::CuArray{T})\n\nCopy an array from a device array src to a host array dst in place. Both arrays should have an equal length.\n\n\n\n"
},

{
    "location": "lib/array.html#Base.copy!-Union{Tuple{CUDAdrv.CuArray{T,N} where N,CUDAdrv.CuArray{T,N} where N}, Tuple{T}} where T",
    "page": "Arrays",
    "title": "Base.copy!",
    "category": "Method",
    "text": "copy!{T}(dst::CuArray{T}, src::CuArray{T})\n\nCopy an array from a device array src to a device array dst in place. Both arrays should have an equal length.\n\n\n\n"
},

{
    "location": "lib/array.html#CUDAdrv.CuArray-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}} where N where T",
    "page": "Arrays",
    "title": "CUDAdrv.CuArray",
    "category": "Method",
    "text": "CuArray{T}(src::Array{T})\n\nTransfer a host array src to device, returning a CuArray.\n\n\n\n"
},

{
    "location": "lib/array.html#Core.Array-Union{Tuple{CUDAdrv.CuArray{T,N}}, Tuple{N}, Tuple{T}} where N where T",
    "page": "Arrays",
    "title": "Core.Array",
    "category": "Method",
    "text": "Array{T}(g::CuArray{T})\n\nTransfer a device array src to host, returning an Array.\n\n\n\n"
},

{
    "location": "lib/array.html#Arrays-1",
    "page": "Arrays",
    "title": "Arrays",
    "category": "section",
    "text": "CUDAdrv provides a primitive but useful array type to manage GPU data organized in an plain, dense fashion.CUDAdrv.CuArray\nCUDAdrv.copy!{T}(::CuArray{T}, ::Array{T})\nCUDAdrv.copy!{T}(::Array{T}, ::CuArray{T})\nCUDAdrv.copy!{T}(::CuArray{T}, ::CuArray{T})\nCUDAdrv.CuArray{T,N}(::Array{T,N})\nCUDAdrv.Array{T,N}(::CuArray{T,N})"
},

]}
