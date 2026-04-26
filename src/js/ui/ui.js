import {navigation} from "../components/navigation.js";
import {button} from "../components/button.js";
import {div} from "../components/div.js";
import {link} from "../components/link.js";
import {index} from "../components/index.js";
import {canv} from "../components/canvas.js";
import * as js from "../module/module.js";

export function ui(){
    [
        {
            e: navigation({
                id: "navigation-bar",
                class: ["navigation-bar", "end-position-fixed","end-few", "end-display-flex", "end-fx-between", "end-fy-center"],
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "navigation",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "20px",
                    height: "var(--html-navigation-bar-height)",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                    top: 0,
                    zIndex: 10
                }
            }, [
                div({id: "website-logo",class: ["website-logo", "feh", "end-display-flex", "end-fx-bet", "end-fy-center", "end-gap-10x", "scaled-0"],attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {animation: "0.6s animate-move-front 0.5s ease-in-out forwards"}},
                    div({id: "website-logo-frame",class: ["website-logo-frame", "feh", "end-display-flex", "end-fx-bet", "end-fy-center", "end-gap-10x"],attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#website-logo")}, 
                    index({id: "logo",class: ["fa-solid", "fa-draw-polygon"],attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#website-logo-frame"), style: {fontSize: "25px", color: "var(z)"}}))
                ),
                div({id: "navigation-links",class: ["navigation-links", "feh", "end-display-flex", "end-fx-bet", "end-fy-center"],attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "20px"}},[
                    link({id:"navigation-link", class: ["navigation-link", "action-button", "end-display-flex", "end-fx-center", "end-fy-center", "active-link"],text: "Documents", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", "--i": "1"}}),
                    link({id:"navigation-link", class: ["navigation-link", "action-button", "end-display-flex", "end-fx-center", "end-fy-center", "reject-link"],text: "Terminals", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", "--i": "2"}}),
                    link({id:"navigation-link", class: ["navigation-link", "action-button", "end-display-flex", "end-fx-center", "end-fy-center", "reject-link"],text: "Apps", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", "--i": "3"}}),
                    link({id:"navigation-link", class: ["navigation-link", "action-button", "end-display-flex", "end-fx-center", "end-fy-center", "reject-link"],text: "Company", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", "--i": "4"}}),
                    link({id:"navigation-link", class: ["navigation-link", "action-button", "end-display-flex", "end-fx-center", "end-fy-center", "reject-link"],text: "Products", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", "--i": "5"}})
                ]
                ),
                 div({id: "actions",class: ["actions", "feh", "end-display-flex", "end-fx-bet", "end-fy-center", "end-gap-10x"],attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar")},[
                    button({id:"navigation-button", class: ["navigation-button", "display-flex", "end-display-flex", "end-fx-center", "end-fy-center", "reject-button"],text: "Sign In", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", fontWeight: "600", background: "transparent", color: "var(--html-navigation-fontcolor)"}}),
                    button({id:"navigation-button", class: ["navigation-button", "display-flex", "end-display-flex", "end-fx-center", "end-fy-center", "active-button"],text: "Sign Up", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#navigation-bar"), style: {padding: "10px 14px", borderRadius: "var(--html-border-radius-l)", fontSize: "14px", fontWeight: "600", background: "#ffffff", color: "var(--html-navigation-background)"}}),                    
                 ])
            ])
        },
        {
            e: div({
                id: "reception-container",
                class: ["reception-container", "end-position-relative","end-few", "end-display-flex", "end-fx-center", "end-fy-center", "auto-h"],
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "var(--html-reception-height)",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            }, [
                canv({id: "reception-canvas", class: ["canvas", "end-position-absolute", "end-few", "end-feh"], style: {filter: "blur(100px) contrast(2)"}}),
                div({id: "message",class: ["message", "end-display-flex", "end-fx-bet", "end-fy-center", "end-gap-10x"], text: `<p><span><i class="fa-regular fa-hand-spock"></i></span><span> 92%</span><span> of users spend less time of  planning </span><span><i class="fa-solid fa-chevron-right"></i></span></p><br>`,attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {background: "#ffffff10", padding: "12px 14px", borderRadius: "40px", border: "var(--html-public-border)", cursor: "pointer", fontSize: "15px", zIndex: 4}}),
                div({id: "header-container",class: ["header-container"], text: `<br><br><h1 style="font-size: 60px;letter-spacing: 0.01em;line-height: 80px;color: var(--html-navigation-fontca)" class="hh1"><span style="--i:1">Compute</span> <span style="--i:2">Your</span> <span style="--i:3">Destiny</span> <br> <span style="--i:4">Build</span> <span style="--i:5">Your</span> <span style="--i:6">Wealth</span></h1><p style="margin-top: 20px;font-size: 15px">A modern processor platform designed to help you compute faster <br> execute efficiently, and dominate on your own terms.</p>`,attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {zIndex: 4}}),
                div({id: "actions-container",class: ["actions-container", "end-display-flex"],attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {marginTop: "50px", gap: "20px", zIndex: 4}}, [
                    button({id:"navigation-button", class: ["navigation-button", "display-flex", "end-display-flex", "end-fx-center", "end-fy-center", "active-button"],text: `<span>Get Started</span><span><i class="fa-solid fa-arrow-right" style="font-size: 18px"></i></span>`, attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {padding: "15px 30px", borderRadius: "var(--html-border-radius-l)", fontSize: "16px", fontWeight: "600", background: "#ffffff", color: "var(--html-navigation-background)", gap: "10px"}}), 
                    button({id:"navigation-button", class: ["navigation-button", "display-flex", "end-display-flex", "end-fx-center", "end-fy-center", "reject-button"],text: "Live Dashboard", attr: {org: "element",name: "element",element: "div",type: "actions",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {padding: "15px 30px", borderRadius: "var(--html-border-radius-l)", fontSize: "16px", fontWeight: "500", background: "#ffffff10", color: "var(--html-navigation-fontcolor)", border: "var(--html-public-border)"}})                                   
                ]),
                div({id: "companies-container",class: ["companies-container","position-relative", "few", "end-display-grid", "end-grid-column-300x", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1000px", height: "auto", marginTop: "40px"}}, [
                    div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<div class="company-details end-position-relative end-display-flex end-fx-between end-fy-center"><img src="../frontend/public/images/606655.webp" width="60px" height="60px" style="overflow: hidden; border-radius: var(--html-border-radius-l)"><div class="end-position-relative" style="width: calc(100% - 110px)"><h4 style="color: #fff;text-align: left;font-size: 20px">AMD</h4><p style="opacity: 0.5;text-align: left;font-size: 14px">AMD Platform</p></div><i class="fa-solid fa-star"></i></div><p style="font-size: 12px;text-align: left;position: absolute !important; bottom: 20px"><span style="font-size: 30px">789.94</span><br><span style="color: #21cf70"><i class="fa-solid fa-arrow-up" style="margin-top: -3px"></i> +0.08(0.02%)</span></p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "200px", marginTop: "40px"}}),              
                    div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<div class="company-details end-position-relative end-display-flex end-fx-between end-fy-center"><img src="../frontend/public/images/badge-core-processor-series.png" width="60px" height="60px" style="overflow: hidden; border-radius: var(--html-border-radius-l)"><div class="end-position-relative" style="width: calc(100% - 110px)"><h4 style="color: #fff;text-align: left;font-size: 20px">INTEL</h4><p style="opacity: 0.5;text-align: left;font-size: 14px">INTEL Platform</p></div><i class="fa-solid fa-star"></i></div><p style="font-size: 12px;text-align: left;position: absolute !important; bottom: 20px"><span style="font-size: 30px">500.94</span><br><span style="color: #21cf70"><i class="fa-solid fa-arrow-up" style="margin-top: -3px"></i> +0.08(0.04%)</span></p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "200px", marginTop: "40px"}}),              
                    div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<div class="company-details end-position-relative end-display-flex end-fx-between end-fy-center"><img src="../frontend/public/images/channels4_profile.jpg" width="60px" height="60px" style="overflow: hidden; border-radius: var(--html-border-radius-l)"><div class="end-position-relative" style="width: calc(100% - 110px)"><h4 style="color: #fff;text-align: left;font-size: 20px">NVIDIA</h4><p style="opacity: 0.5;text-align: left;font-size: 14px">NVIDIA Platform</p></div><i class="fa-solid fa-star"></i></div><p style="font-size: 12px;text-align: left;position: absolute !important; bottom: 20px"><span style="font-size: 30px">84.94</span><br><span style="color: #ff0055"><i class="fa-solid fa-arrow-down" style="margin-top: -3px"></i> -0.10(0.01%)</span></p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "200px", marginTop: "40px"}})     
                ])
            ])
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 30px;font-weight: 600'>Trusted and adopted by the world's <br> leading technology companies.</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "#ffffff",
                    color: "#131318",
                }
            },div({id: "companies-container",class: ["companies-container","position-relative", "few", "end-display-grid", "end-grid-column-250x", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1200px", height: "auto",margin: "0 auto", marginTop: "40px"}}, [
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Microsoft_logo_(2012).svg.webp" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 1}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Airtable_Logo.svg.png" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 2}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Slack_Technologies_Logo.svg.png" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 3}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Square,_Inc._logo.svg" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 4}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Asana_logo.svg.png" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 5}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Amazon_logo.svg.png" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 6}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/linear-logo-freelogovectors.net_-1536x428.png" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 7}}),
                div({id: "company-container", class: ["studio-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-center"], text: `<img src="../frontend/public/images/Spotify_logo_with_text.svg" width="70%">`, attr: {org: "element", name: "element", element: "div", type: "company-container", untx: "UTF-8 unicode ascii"}, data: {org: "element", skeletion: "active"}, parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 8}})
                ]))
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 50px;font-weight: 600'>The Brain of the Computer</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            },div({id: "companies-container",class: ["cpu","position-relative", "few", "end-display-grid", "end-grid-column-400x", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1000px", height: "auto",margin: "0 auto", marginTop: "40px", paddingBottom: "20px"}}, [              
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<p style="text-align:left">The Central Processing Unit (CPU) is the primary component of a computer that performs most of the processing inside the system, often referred to as the "brain" of the machine. It executes instructions from computer programs by performing basic arithmetic, logic, control, and input/output operations specified by the code. Comprised of a control unit that directs operations and an arithmetic logic unit (ALU) that handles mathematical calculations, the CPU fetches instructions from memory, decodes them, and then executes them in a continuous cycle. Its speed, measured in gigahertz (GHz), largely determines how quickly a computer can respond and run applications, making it a critical factor in overall system performance.</p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}}),  
                 div({id: "company-container",class: ["company-container", "user-interface", "end-display-block", "end-position-relative"],text: "<img src='../frontend/public/images/amd-cpu.png' class='end-position-absolute' style='width: 340px;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: blur(100px) contrast(2)'><img src='../frontend/public/images/amd-cpu.png' class='end-position-absolute' style='width: 340px;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: contrast(1.3)'>",attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}})
                ]))
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 50px;font-weight: 600'>Components of a Processor (CPU)</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            },div({id: "companies-container",class: ["cpu","position-relative", "few", "end-display-grid", "end-grid-column-400x", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1000px", height: "auto",margin: "0 auto", marginTop: "40px", paddingBottom: "20px"}}, [      
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block", "end-position-relative"],text: "<img src='../frontend/public/images/intel-cpu.png' class='end-position-absolute' style='width: 340px;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: blur(100px) contrast(2)'><img src='../frontend/public/images/intel-cpu.png' class='end-position-absolute' style='width: 340px;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: contrast(1.3)'>",attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}}),        
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<p style="text-align:left">A processor (CPU) consists of several key internal components that work together to execute instructions: the Control Unit (CU) which decodes instructions and coordinates data flow by sending control signals to other components; the Arithmetic Logic Unit (ALU) which performs all arithmetic operations (addition, subtraction, multiplication, division) and logical operations (AND, OR, NOT, comparisons); the Register File which provides ultra-fast temporary storage for data, addresses, and intermediate results (including the Program Counter, Instruction Register, and general-purpose registers); the Cache Memory (L1, L2, L3) which stores frequently accessed data close to the core for rapid access; and the Clock which synchronizes all operations by generating timing signals measured in Hertz (cycles per second). These components communicate via internal buses (data bus, address bus, and control bus) to fetch, decode, execute, and store back results — a cycle known as the instruction cycle.</p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}})
                ]))
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 50px;font-weight: 600'>What Determines Processor <br> Quality and Performance</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            },div({id: "companies-container",class: ["cpu","position-relative", "few", "end-display-grid", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1000px", height: "auto",margin: "0 auto", marginTop: "40px", paddingBottom: "20px"}}, [      
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block", "end-position-relative"],text: "<img src='../frontend/public/images/best-gaming-cpu.jpg' class='end-position-absolute' style='width: 70%;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: blur(100px) contrast(2);border-radius: var(--html-border-radius-l)'><img src='../frontend/public/images/best-gaming-cpu.jpg' class='end-position-absolute' style='width: 70%;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: contrast(1.3);border-radius: var(--html-border-radius-l)'>",attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "400px", marginTop: "40px", "--i": 2}}),        
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<p style="text-align:left;width: 800px;margin: 0 auto">Processor quality and performance are determined by several key factors: Clock Speed (measured in GHz), which indicates how many cycles per second the CPU can execute; Core Count, where more cores allow better parallel processing and multitasking; Cache Size (L1, L2, L3), as larger and smarter caches reduce latency by storing frequently used data closer to the cores; Instruction Set Architecture (ISA) , where advanced features like SIMD (Single Instruction Multiple Data) and out-of-order execution improve efficiency; Manufacturing Process (measured in nanometers, e.g., 5nm, 3nm), where smaller nodes mean lower power consumption, less heat, and higher transistor density; Thermal Design Power (TDP) , which affects sustained performance under load; and IPC (Instructions Per Cycle) , a critical metric showing how much work the CPU accomplishes per clock cycle — making a CPU with higher IPC and lower clock speed potentially faster than one with higher clock speed but lower IPC. Top-tier processors also include technologies like hyper-threading, turbo boost, and integrated memory controllers to further enhance real-world performance.</p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}})
                ]))
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 50px;font-weight: 600'>Intel vs AMD : Which Processor <br> Is Better ?</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            },div({id: "companies-container",class: ["cpu","position-relative", "few", "end-display-grid", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1000px", height: "auto",margin: "0 auto", marginTop: "40px", paddingBottom: "20px"}}, [  
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<p style="text-align:left;width: 800px;margin: 0 auto">There is no single "best" brand, as the choice between Intel and AMD depends entirely on your specific needs, budget, and use case — but in 2026, AMD generally leads in pure gaming performance thanks to its 3D V-Cache technology (e.g., Ryzen 7 9850X3D), while Intel often holds an advantage in productivity tasks like video editing, rendering, and AI workloads due to higher core counts and better optimized hybrid architectures (e.g., Core Ultra 9 285K). AMD processors typically offer better power efficiency, longer platform longevity (AM5 socket support until at least 2027+), and more PCIe lanes, making them ideal for future-proof gaming builds. Intel, on the other hand, provides superior single-core performance in some applications, better Quick Sync video encoding, and often better value in budget to mid-range segments. Ultimately, for gaming and general use, AMD is currently the stronger recommendation; for professional content creation and heavy multitasking with AI features, Intel remains highly competitive. Always compare specific models at your price point — the "better" brand is the one that delivers the performance you need for the software you actually use.</p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}}),    
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block", "end-position-relative"],text: "<img src='../frontend/public/images/project-3d-par-ishak.jpeg' class='end-position-absolute' style='width: 100%;height: 200px;object-fit:cover;object-position:center center;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: blur(100px) contrast(2);border-radius: var(--html-border-radius-l)'><img src='../frontend/public/images/project-3d-par-ishak.jpeg' class='end-position-absolute' style='width: 100%;top: 50%;left: 50%; transform: translate(-50%, -50%);height: 200px;object-fit:cover;object-position:center center;filter: contrast(1.3);border-radius: var(--html-border-radius-l)'>",attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "200px", marginTop: "40px", "--i": 2}})
                ]))
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 50px;font-weight: 600'>The Primary Circuit Adopted for <br> Creating the Processor</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            },div({id: "companies-container",class: ["cpu","position-relative", "few", "end-display-grid", "end-gap-5", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1000px", height: "auto",margin: "0 auto", marginTop: "40px", paddingBottom: "20px"}}, [  
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block"],text: `<p style="text-align:left;width: 800px;margin: 0 auto">The visual processor effect is entirely based on a chaotic feedback loop circuit implemented within the fragment shader, rather than on a physical electronic circuit. This computational circuit operates on the principle of recursive feedback, where the output color vector from one iteration is fed back as an input for the next iteration. The algorithm initiates with a zero vector and then, over ten successive iterations, applies a series of nested trigonometric functions—specifically sine, cosine, and tangent—to the red, green, and blue color components. Each color channel is cross-coupled with the other channels, combined with scaled time variables and spatial coordinates derived from the screen position. This recursive architecture creates a non-linear dynamical system that generates complex, evolving fractal patterns. The final color value is obtained by applying a sine transformation to the result of the ten iterations, mapping the chaotic output into a visible spectrum. Thus, the entire processor is built upon a self-referential feedback circuit that continuously recalculates its own state based on previous outputs</p>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "auto", marginTop: "40px", "--i": 2}}),    
                div({id: "company-container",class: ["company-container", "user-interface", "end-display-block", "end-position-relative"],text: "<img src='../frontend/public/images/image-created-by-ishak.jpg' class='end-position-absolute' style='width: 100%;height: 200px;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: blur(100px) contrast(2);border-radius: var(--html-border-radius-l);object-fit:cover;object-position:center center'><img src='../frontend/public/images/image-created-by-ishak.jpg' class='end-position-absolute' style='width: 100%;height: 200px;top: 50%;left: 50%; transform: translate(-50%, -50%);filter: contrast(1.3);border-radius: var(--html-border-radius-l);object-fit:cover;object-position:center center'>",attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "200px", marginTop: "40px", "--i": 2}})
                ]))
        },
        {
            e: div({
                id: "trusted-container",
                class: ["trusted-container", "end-position-relative","end-few", "end-display-block", "end-fx-center", "end-fy-center", "auto-h"],
                text: "<p style='font-size: 30px;font-weight: 600'>Meet the development team behind <br> Our lightweight static website</p>",
                attr: {
                    org: "element",
                    name: "element",
                    element: "div",
                    type: "reception",
                    untx: "UTF-8 unicode ascii",
                },
                data: {
                    org: "element",
                    skeletion: "active"
                },
                parent: document.body,
                style: {
                    padding: "calc(var(--html-navigation-bar-height) * 2) 40px",
                    minHeight: "100px",
                    background: "var(--html-navigation-background)",
                    color: "var(--html-navigation-fontcolor)",
                }
            },div({id: "crewmates-container",class: ["crewmates-container","position-relative", "few", "end-display-grid", "end-grid-column-400x", "end-gap-10x", "end-merge-w"],attr: {org: "element",name: "element",element: "div",type: "companies-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#reception-container"), style: {width: "1200px", height: "auto",margin: "0 auto", marginTop: "40px"}}, [
                div({id: "company-container",class: ["cremate-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-between","end-gap-10x"],text: `<div class="user right-pos end-display-flex end-fx-between end-fy-center end-gap-10x"><div class="account" style="width: 60px;height: 60px;overflow: hidden;border-radius: 50%;margin-right: 10px"><img src="../frontend/public/images/profile1.png" class="end-few end-feh" style="object-fit:cover;object-position:center center"></div><div class="account details"><h4 style="text-align: left;line-height: 0px"><span>Mohamed Ishak Bagga - </span><span><i class="fa-solid fa-circle" style="color: #ffc800;font-size: 10px;margin-right: 10px"></i></span><span>Crewmate</span></h4><br><p  style="text-align: left;line-height: 0px"><span class="work">Producer</span><i class="fa-solid fa-circle" style="color: #FF0055;font-size: 10px;margin: 0 10px"></i><span class="work">Website Builder</span></p></div></div><div><i class="fa-solid fa-award" style="color: #ffd900;font-size: 20px;margin: 0 10px"></i><i class="fa-solid fa-certificate" style="color: #ffa200;font-size: 20px;margin: 0 10px"></i></div>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 1, borderRadius: "var(--html-border-radius-l)", boxShadow: "0 0 15px #00000005", padding: "5px 20px"}}),
                div({id: "company-container",class: ["cremate-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-between","end-gap-10x"],text: `<div class="user right-pos end-display-flex end-fx-between end-fy-center end-gap-10x"><div class="account" style="width: 60px;height: 60px;overflow: hidden;border-radius: 50%;margin-right: 10px"><img src="../frontend/public/images/profile2.png" class="end-few end-feh" style="object-fit:cover;object-position:center center"></div><div class="account details"><h4 style="text-align: left;line-height: 0px"><span>Mohamed Gorine - </span><span><i class="fa-solid fa-circle" style="color: #ffc800;font-size: 10px;margin-right: 10px"></i></span><span>Crewmate</span></h4><br><p  style="text-align: left;line-height: 0px"><span class="work">Backend Dev</span><i class="fa-solid fa-circle" style="color: #FF0055;font-size: 10px;margin: 0 10px"></i><span class="work">API Expert</span></p></div></div><div><i class="fa-solid fa-award" style="color: #ffd900;font-size: 20px;margin: 0 10px"></i><i class="fa-solid fa-certificate" style="color: #ffa200;font-size: 20px;margin: 0 10px"></i></div>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 2, borderRadius: "var(--html-border-radius-l)", boxShadow: "0 0 15px #00000005", padding: "5px 20px"}}),        
                div({id: "company-container",class: ["cremate-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-between","end-gap-10x"],text: `<div class="user right-pos end-display-flex end-fx-between end-fy-center end-gap-10x"><div class="account" style="width: 60px;height: 60px;overflow: hidden;border-radius: 50%;margin-right: 10px"><img src="../frontend/public/images/profile3.png" class="end-few end-feh" style="object-fit:cover;object-position:center center"></div><div class="account details"><h4 style="text-align: left;line-height: 0px"><span>Didjaoui Soufiane - </span><span><i class="fa-solid fa-circle" style="color: #ffc800;font-size: 10px;margin-right: 10px"></i></span><span>Crewmate</span></h4><br><p  style="text-align: left;line-height: 0px"><span class="work">Mobile Dev</span><i class="fa-solid fa-circle" style="color: #FF0055;font-size: 10px;margin: 0 10px"></i><span class="work">UI Designer</span></p></div></div><div><i class="fa-solid fa-award" style="color: #ffd900;font-size: 20px;margin: 0 10px"></i><i class="fa-solid fa-certificate" style="color: #ffa200;font-size: 20px;margin: 0 10px"></i></div>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 3, borderRadius: "var(--html-border-radius-l)", boxShadow: "0 0 15px #00000005", padding: "5px 20px"}}),               
                div({id: "company-container",class: ["cremate-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-between","end-gap-10x"],text: `<div class="user right-pos end-display-flex end-fx-between end-fy-center end-gap-10x"><div class="account" style="width: 60px;height: 60px;overflow: hidden;border-radius: 50%;margin-right: 10px"><img src="../frontend/public/images/profile4.png" class="end-few end-feh" style="object-fit:cover;object-position:center center"></div><div class="account details"><h4 style="text-align: left;line-height: 0px"><span>Tidjini Issa - </span><span><i class="fa-solid fa-circle" style="color: #ffc800;font-size: 10px;margin-right: 10px"></i></span><span>Crewmate</span></h4><br><p  style="text-align: left;line-height: 0px"><span class="work">DevOps Eng</span><i class="fa-solid fa-circle" style="color: #FF0055;font-size: 10px;margin: 0 10px"></i><span class="work">Cloud Admin</span></p></div></div><div><i class="fa-solid fa-award" style="color: #ffd900;font-size: 20px;margin: 0 10px"></i><i class="fa-solid fa-certificate" style="color: #ffa200;font-size: 20px;margin: 0 10px"></i></div>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 4, borderRadius: "var(--html-border-radius-l)", boxShadow: "0 0 15px #00000005", padding: "5px 20px"}}),             
                div({id: "company-container",class: ["cremate-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-between","end-gap-10x"],text: `<div class="user right-pos end-display-flex end-fx-between end-fy-center end-gap-10x"><div class="account" style="width: 60px;height: 60px;overflow: hidden;border-radius: 50%;margin-right: 10px"><img src="../frontend/public/images/profile5.png" class="end-few end-feh" style="object-fit:cover;object-position:center center"></div><div class="account details"><h4 style="text-align: left;line-height: 0px"><span>Ayoub Fares - </span><span><i class="fa-solid fa-circle" style="color: #ffc800;font-size: 10px;margin-right: 10px"></i></span><span>Crewmate</span></h4><br><p  style="text-align: left;line-height: 0px"><span class="work">QA Tester</span><i class="fa-solid fa-circle" style="color: #FF0055;font-size: 10px;margin: 0 10px"></i><span class="work">Bug Hunter</span></p></div></div><div><i class="fa-solid fa-award" style="color: #ffd900;font-size: 20px;margin: 0 10px"></i><i class="fa-solid fa-certificate" style="color: #ffa200;font-size: 20px;margin: 0 10px"></i></div>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 5, borderRadius: "var(--html-border-radius-l)", boxShadow: "0 0 15px #00000005", padding: "5px 20px"}}),              
                div({id: "company-container",class: ["cremate-container", "user-interface", "end-display-flex", "end-fy-center", "end-fx-between","end-gap-10x"],text: `<div class="user right-pos end-display-flex end-fx-between end-fy-center end-gap-10x"><div class="account" style="width: 60px;height: 60px;overflow: hidden;border-radius: 50%;margin-right: 10px"><img src="../frontend/public/images/profile6.png" class="end-few end-feh" style="object-fit:cover;object-position:center center"></div><div class="account details"><h4 style="text-align: left;line-height: 0px"><span>Ferfour Farouk - </span><span><i class="fa-solid fa-circle" style="color: #ffc800;font-size: 10px;margin-right: 10px"></i></span><span>Crewmate</span></h4><br><p  style="text-align: left;line-height: 0px"><span class="work">Security Pro</span><i class="fa-solid fa-circle" style="color: #FF0055;font-size: 10px;margin: 0 10px"></i><span class="work">Pen Tester</span></p></div></div><div><i class="fa-solid fa-award" style="color: #ffd900;font-size: 20px;margin: 0 10px"></i><i class="fa-solid fa-certificate" style="color: #ffa200;font-size: 20px;margin: 0 10px"></i></div>`,attr: {org: "element",name: "element",element: "div",type: "company-container",untx: "UTF-8 unicode ascii"},data: {org: "element",skeletion: "active"},parent: js.$("#companies-container"), style: {height: "100px", marginTop: "40px", "--i": 6, borderRadius: "var(--html-border-radius-l)", boxShadow: "0 0 15px #00000005", padding: "5px 20px"}})
                ]))
        }
    ]        
    var canvas=document.getElementById('reception-canvas'),ctx=canvas.getContext('2d');canvas.width=window.innerWidth;canvas.height=window.innerHeight;var mw=(Math.PI/3)*7/canvas.width,mh=(Math.PI/2)/canvas.height;var colors=['#ff0055','red','dodgerblue','deepskyblue','#ffaa00','#00ff88','#ff44cc','#44ffcc'];function dir(l,radi){return[l*Math.sin(radi),l*Math.cos(radi)]}function noise(x,y){return Math.sin(x*0.01)*Math.cos(y*0.01)}function Parts(x,y){this.pos=[x,y];this.color=colors[Math.floor(Math.random()*colors.length)]}Parts.prototype.upd=function(ctx){var _arr2=[this.pos[0],this.pos[1]];var res=dir(25,Math.PI*2.8*noise(_arr2[0]*mw*0.25,_arr2[1]*mh*1.18));_arr2[0]+=res[0];_arr2[1]+=res[1];ctx.beginPath();ctx.moveTo(_arr2[0],_arr2[1]);ctx.lineTo(this.pos[0],this.pos[1]);ctx.strokeStyle=this.color;ctx.stroke();this.pos[0]=_arr2[0];this.pos[1]=_arr2[1];if(this.pos[0]<0||this.pos[0]>canvas.width){this.pos[0]=Math.random()*canvas.width;this.pos[1]=Math.random()*canvas.height;this.color=colors[Math.floor(Math.random()*colors.length)]}if(this.pos[1]<0||this.pos[1]>canvas.height){this.pos[0]=Math.random()*canvas.width;this.pos[1]=Math.random()*canvas.height;this.color=colors[Math.floor(Math.random()*colors.length)]}};var particles=[];function init(){particles=[];for(var i=0;i<2000;i++){particles.push(new Parts(Math.random()*canvas.width,Math.random()*canvas.height))}}init();ctx.fillStyle='rgba(0,0,0,0.05)';function go(){ctx.fillRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;i++){particles[i].upd(ctx)}requestAnimationFrame(go)}window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;mw=(Math.PI/3)*7/canvas.width;mh=(Math.PI/2)/canvas.height;init()});go();
}