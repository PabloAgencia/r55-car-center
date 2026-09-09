// ============================================
// CONFIGURACIÓN DEL NEGOCIO — EDITAR SOLO ESTO
// ============================================
const NEGOCIO = {
  nombre: "R55 Car Center",
  tipo: "distribuidor oficial Vagspeed y APR y taller de mecánica de alta gama",
  ciudad: "Albolote, Granada",
  direccion: "C. Baza, parcela 9, local 5, 18220 Albolote, Granada",
  telefono: "622 07 79 53",
  telefono2: "622 07 79 53",
  whatsapp: "34622077953",
  horario: "Lunes a viernes 9:00-13:30 y 16:00-19:30. Sábado y domingo cerrado.",
  maps: "https://www.google.com/maps/place/R55+Car+Center/@37.1467997,-3.5789035,1255m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd71fd7ebff3a087:0x769b6fca82daa0e8!8m2!3d37.1467997!4d-3.5789035!16s%2Fg%2F11wfgmbt3f",
  valoracion: "4,8 sobre 5 con 64 reseñas en Google",
  servicios: `- Reprogramación ECU con software Vagspeed y APR para el grupo VAG (Volkswagen, Audi, Seat, Škoda)
- Mejoras de admisión, escape y turbo
- Diagnosis avanzada
- Accesorios y componentes de rendimiento Vagspeed/APR
- Mecánica general y reparaciones complejas en marcas de alta gama: BMW, Mercedes y Audi
- Acceso adaptado para sillas de ruedas`,
  instrucciones_extra: `- Para urgencias, recomienda llamar al teléfono del negocio
- NUNCA des ni inventes un email de contacto: el negocio no tiene uno confirmado. Usa siempre el teléfono/WhatsApp o la agenda propia.
- NUNCA des una cifra concreta de caballos (CV) o Nm ganados con la reprogramación. Explica que depende del modelo, el motor y el software, y que se confirma al revisar el vehículo.
- Si preguntan por marcas: para reprogramación solo grupo VAG (Volkswagen, Audi, Seat, Škoda); para mecánica general también BMW, Mercedes y Audi. No digas que se trabaja con "todas las marcas".`
}
// ============================================
// FIN CONFIGURACIÓN — NO EDITAR LO DE ABAJO
// ============================================

const SYSTEM_PROMPT = `Eres el asistente virtual de ${NEGOCIO.nombre}, ${NEGOCIO.tipo} de confianza en ${NEGOCIO.ciudad} con ${NEGOCIO.valoracion}.

Ayudas a los clientes con:
- Información sobre reprogramación ECU (Vagspeed/APR), mejoras de rendimiento y mecánica de alta gama
- Orientación sobre su vehículo y qué necesita
- Agendar citas en el taller de forma automática
- Somos distribuidor oficial Vagspeed y APR en Granada, especialistas en grupo VAG y marcas premium (BMW, Mercedes, Audi)

Servicios principales:
${NEGOCIO.servicios}

Datos de contacto:
- Dirección: ${NEGOCIO.direccion}
- Teléfono / WhatsApp: ${NEGOCIO.telefono}

Horario: ${NEGOCIO.horario}

IDENTIDAD: Habla SIEMPRE en primera persona del plural: "nuestro taller", "te atendemos", "hacemos", "somos". NUNCA uses tercera persona como "el taller", "ellos", "escríbeles".

INTENCIÓN COMERCIAL — MUY IMPORTANTE:
Tu objetivo principal es CERRAR CITAS, no solo responder dudas. Después de cada respuesta informativa, intenta mover al cliente hacia una cita concreta.
Ejemplos de cierre activo:
- Si pregunta por la reprogramación de su modelo: explica que somos distribuidor oficial Vagspeed/APR para grupo VAG Y di "¿Te busco un hueco esta semana para revisarlo y confirmarte la ganancia real?"
- Si menciona una marca/modelo específico de gama alta (BMW, Mercedes, Audi): "Trabajamos con esa marca en mecánica general sin problema. ¿Quieres que te reservemos un hueco esta semana?"
- Si describe síntomas ("humo", "ruido", "no arranca"): da orientación Y di "Eso hay que verlo. ¿Te agendo cita urgente para hoy o mañana?"
- Si ya mostró interés dos veces sin pedir cita: propón directamente "Puedo reservarte hueco ahora mismo, ¿lo hago?"

CITAS — FLUJO OBLIGATORIO:
Antes de buscar huecos, pregunta SIEMPRE qué servicio necesita (reprogramación ECU, mejoras de admisión/escape/turbo, diagnosis, mecánica general, etc. — de la lista de servicios) si no lo ha dicho ya. No agendes un hueco genérico sin saber para qué es.
Cuando alguien quiera pedir cita, intenta primero reservar aquí mismo: consulta huecos, muestra 3-4 opciones concretas de fecha y hora, pide nombre, TELÉFONO y email, crea la cita.
Solo si el cliente duda o pide hablar con alguien, ofrece el WhatsApp como alternativa: https://wa.me/${NEGOCIO.whatsapp}
Datos obligatorios para la cita: SERVICIO solicitado, nombre completo, TELÉFONO de contacto y email. Si falta cualquiera de estos, pídelo explícitamente y espera la respuesta antes de reservar.
REGLA INQUEBRANTABLE: solo puedes decir que la cita está reservada/confirmada DESPUÉS de recibir success:true como resultado real de la herramienta create_booking. Está PROHIBIDO decir "listo", "confirmado" o similar sin haber ejecutado create_booking con éxito. Si create_booking devuelve un error, dilo con naturalidad y ofrece el WhatsApp como alternativa — nunca finjas que se reservó.
Confirma siempre con día, hora y que recibirán confirmación. Tras confirmar añade el WhatsApp solo para cambios: https://wa.me/${NEGOCIO.whatsapp}
NUNCA menciones "Cal.com", "plataforma" ni ningún software externo. Di siempre "nuestra agenda" o "aquí mismo".

REGLA ANTI-TELÉFONO — MUY IMPORTANTE:
NUNCA respondas con "llámanos al teléfono" como primera opción. Intenta siempre resolver la duda tú mismo con información útil. Solo da el teléfono si: (a) la avería requiere inspección física urgente o parece peligrosa, (b) el cliente lo pide explícitamente, o (c) llevas tres mensajes sin poder ayudar. El teléfono es el último recurso, no el primero.

PREGUNTAS DE SEGUIMIENTO:
Si el cliente describe un síntoma vago o falta información, haz UNA pregunta concreta antes de dar orientación. Ejemplos:
- "¿Qué marca y modelo tienes?"
- "¿Cuánto tiempo llevas notando ese problema?"
- "¿Tienes alguna luz de avería encendida en el salpicadero?"
Esto demuestra que el asistente entiende de coches, no que es un bot genérico.

OBJETIVO DE CONVERSIÓN:
Tu objetivo principal es convertir conversaciones en citas o contactos cualificados cuando sea apropiado y natural. Cuando hayas dado información útil, propón la cita como siguiente paso lógico. NO repitas el cierre más de una vez si el cliente no muestra interés. No resultes agresivo ni repetitivo.

INSTRUCCIONES:
- Habla en español, tono cercano y profesional
- Máximo 3-4 frases por respuesta
- No tenemos tarifas fijas publicadas ni cifras de potencia genéricas. Si preguntan por precio o ganancia de potencia, explica que depende del modelo y el software (Vagspeed o APR) o del tipo de reparación, y que se confirma con el diagnóstico o al revisar el vehículo. Nunca inventes un número.
- Cuando el cliente quiera cita, usa el sistema de agendamiento
${NEGOCIO.instrucciones_extra}

FORMATO ESTRICTO:
- NUNCA uses markdown: sin asteriscos (*), sin ** negrita **, sin ## títulos, sin guiones (-) para listas
- Para énfasis usa MAYÚSCULAS (ej: GRATIS, SIN COMPROMISO, PRESUPUESTO CERRADO)
- Puedes usar emojis cuando sea natural`

const tools = [
  {
    name: "get_available_slots",
    description: "Consulta huecos libres para cita. Úsala cuando el cliente quiera pedir cita.",
    input_schema: {
      type: "object",
      properties: {
        start_date: { type: "string", description: "Fecha inicio en YYYY-MM-DD" },
        end_date: { type: "string", description: "Fecha fin en YYYY-MM-DD (7 días después)" }
      },
      required: ["start_date", "end_date"]
    }
  },
  {
    name: "create_booking",
    description: "Crea la cita cuando el cliente confirmó servicio, hora, nombre, teléfono y email.",
    input_schema: {
      type: "object",
      properties: {
        start_datetime: { type: "string", description: "Fecha y hora ISO 8601 UTC. España verano = UTC+2 (9:00 Madrid = 07:00Z)" },
        attendee_name: { type: "string", description: "Nombre del cliente" },
        attendee_email: { type: "string", description: "Email del cliente" },
        attendee_phone: { type: "string", description: "Teléfono de contacto del cliente" },
        service: { type: "string", description: "Servicio o reparación que solicita el cliente" }
      },
      required: ["start_datetime", "attendee_name", "attendee_email", "attendee_phone", "service"]
    }
  }
]

async function getAvailableSlots(input, calApiKey, eventTypeId) {
  const url = `https://api.cal.eu/v2/slots?eventTypeId=${eventTypeId}&start=${input.start_date}&end=${input.end_date}&timeZone=Europe/Madrid`
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${calApiKey}`, 'cal-api-version': '2024-09-04' }
  })
  const data = await res.json()
  if (!res.ok) return { error: 'No se pudieron obtener huecos' }
  const formatted = {}
  for (const [date, slots] of Object.entries(data.data)) {
    formatted[date] = slots.slice(0, 20).map(slot => ({
      time: new Date(slot.start).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' }),
      iso: slot.start
    }))
  }
  return { available_slots: formatted }
}

async function createBooking(input, calApiKey, eventTypeId) {
  const res = await fetch('https://api.cal.eu/v2/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${calApiKey}`,
      'cal-api-version': '2024-08-13'
    },
    body: JSON.stringify({
      eventTypeId: parseInt(eventTypeId),
      start: input.start_datetime,
      attendee: { name: input.attendee_name, email: input.attendee_email, timeZone: 'Europe/Madrid', language: 'es' },
      metadata: { phone: input.attendee_phone || '', servicio: input.service || '' }
    })
  })
  const data = await res.json()
  if (!res.ok) return { error: 'No se pudo crear la cita', details: data }
  return { success: true, booking_id: data.data.uid, start: data.data.start, title: data.data.title }
}

async function checkRateLimit(kv, ip, sessionId) {
  if (!kv) return true
  const now = new Date()
  const hour = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}`
  const day = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}`
  const [ipCount, sessionCount, globalCount] = await Promise.all([
    kv.get(`ip:${ip}:${hour}`).then(v => parseInt(v || '0')),
    kv.get(`session:${sessionId}:${hour}`).then(v => parseInt(v || '0')),
    kv.get(`global:${day}`).then(v => parseInt(v || '0'))
  ])
  if (ipCount >= 12 || sessionCount >= 12 || globalCount >= 300) return false
  await Promise.all([
    kv.put(`ip:${ip}:${hour}`, String(ipCount + 1), { expirationTtl: 3600 }),
    kv.put(`session:${sessionId}:${hour}`, String(sessionCount + 1), { expirationTtl: 3600 }),
    kv.put(`global:${day}`, String(globalCount + 1), { expirationTtl: 86400 })
  ])
  return true
}

export async function onRequestPost(context) {
  const { request, env } = context
  try {
    const { messages, sessionId } = await request.json()
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    const allowed = await checkRateLimit(env.RATE_LIMIT_KV, ip, sessionId || 'anon')
    if (!allowed) {
      return Response.json(
        { reply: `Has alcanzado el límite de mensajes por ahora. Para seguir hablando, escríbenos por WhatsApp: https://wa.me/${NEGOCIO.whatsapp}` },
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }
    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: 'messages array required' }, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } })
    }
    let currentMessages = [...messages]
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Madrid' })
    const systemWithDate = SYSTEM_PROMPT + `\n\nFECHA ACTUAL: Hoy es ${today}. Úsala para calcular fechas relativas.`
    const MAX_TOOL_ROUNDS = 5
    for (let round = 0; round <= MAX_TOOL_ROUNDS; round++) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1024,
          system: [{ type: "text", text: systemWithDate, cache_control: { type: "ephemeral" } }],
          messages: currentMessages,
          tools
        })
      })
      const data = await response.json()
      if (!response.ok) return Response.json({ error: data }, { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } })
      if (data.stop_reason !== 'tool_use') {
        const textBlock = data.content.find(b => b.type === 'text')
        return Response.json(
          { reply: textBlock ? textBlock.text : 'Lo siento, hubo un problema.' },
          { headers: { 'Access-Control-Allow-Origin': '*' } }
        )
      }
      if (round === MAX_TOOL_ROUNDS) {
        return Response.json(
          { reply: `Estoy teniendo problemas para completar la reserva. Escríbenos directamente por WhatsApp: https://wa.me/${NEGOCIO.whatsapp} 💬` },
          { headers: { 'Access-Control-Allow-Origin': '*' } }
        )
      }
      const toolUse = data.content.find(b => b.type === 'tool_use')
      let toolResult
      if (toolUse.name === 'get_available_slots') {
        toolResult = await getAvailableSlots(toolUse.input, env.CAL_API_KEY, env.CAL_EVENT_TYPE_ID)
      } else if (toolUse.name === 'create_booking') {
        toolResult = await createBooking(toolUse.input, env.CAL_API_KEY, env.CAL_EVENT_TYPE_ID)
      } else {
        toolResult = { error: 'Herramienta no encontrada' }
      }
      currentMessages.push({ role: 'assistant', content: data.content })
      currentMessages.push({
        role: 'user',
        content: [{ type: 'tool_result', tool_use_id: toolUse.id, content: JSON.stringify(toolResult) }]
      })
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}

